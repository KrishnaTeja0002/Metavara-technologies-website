#!/bin/bash

# Exit on error
set -e

echo "Starting VPS Setup for Metavara Backend..."

# 1. Update System
echo "Updating system packages..."
sudo apt-get update
sudo apt-get upgrade -y

# 2. Install System Dependencies
echo "Installing system dependencies (Python, Nginx, OCR tools)..."
sudo apt-get install -y python3-venv python3-pip python3-dev nginx libpq-dev git \
    tesseract-ocr poppler-utils libgl1

# 3. Setup Python Environment
echo "Setting up Python virtual environment..."
if [ ! -d ".venv" ]; then
    python3 -m venv .venv
fi

source .venv/bin/activate

# 4. Install Python Dependencies
echo "Installing Python requirements..."
pip install --upgrade pip
pip install -r requirements.txt

# 5. Create .env file if not exists
if [ ! -f ".env" ]; then
    echo "Creating .env file from example..."
    cp .env.example .env
    echo "IMPORTANT: Please edit .env file with your specific settings (SECRET_KEY, ALLOWED_HOSTS)!"
fi

# 6. Django Management Commands
echo "Running Django migrations..."
python manage.py migrate

echo "Collecting static files..."
python manage.py collectstatic --noinput

# Ensure permissions for Nginx to read static/media
chmod -R 755 staticfiles
mkdir -p media
chmod -R 755 media

# 7. Setup Gunicorn Systemd Service
echo "Setting up Gunicorn service..."
# Get current directory and user
CURRENT_DIR=$(pwd)
CURRENT_USER=$(whoami)

SERVICE_FILE="/etc/systemd/system/metavara.service"

sudo bash -c "cat > $SERVICE_FILE" <<EOF
[Unit]
Description=gunicorn daemon for Metavara
After=network.target

[Service]
User=$CURRENT_USER
Group=www-data
WorkingDirectory=$CURRENT_DIR
ExecStart=$CURRENT_DIR/.venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:$CURRENT_DIR/metavara.sock metavara.wsgi:application

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl start metavara
sudo systemctl enable metavara
sudo systemctl restart metavara

# 8. Setup Nginx Configuration
echo "Setting up Nginx..."
NGINX_CONF="/etc/nginx/sites-available/metavara"

sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_IP;

    location = /favicon.ico { access_log off; log_not_found off; }
    
    location /static/ {
        alias $CURRENT_DIR/staticfiles/;
    }

    location /media/ {
        alias $CURRENT_DIR/media/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:$CURRENT_DIR/metavara.sock;
    }
}
EOF

# Enable the site
if [ ! -f "/etc/nginx/sites-enabled/metavara" ]; then
    sudo ln -s /etc/nginx/sites-available/metavara /etc/nginx/sites-enabled
    sudo rm /etc/nginx/sites-enabled/default
fi

echo "Testing Nginx configuration..."
sudo nginx -t

echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "==========================================================="
echo "Setup Complete!"
echo "1. Edit .env file with your production settings."
echo "2. Update /etc/nginx/sites-available/metavara with your actual Domain/IP."
echo "3. Run 'sudo systemctl restart nginx' after updating Nginx config."
echo "==========================================================="

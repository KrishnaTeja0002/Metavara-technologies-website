# Deploying to Hostinger VPS

This backend is configured for a standard Linux VPS (Ubuntu/Debian) deployment.

## Prerequisites on Hostinger VPS
1. **Access**: SSH into your VPS.
2. **OS**: Ubuntu 20.04/22.04 or Debian 10/11.

## Quick Start
1. **Upload Code**: Upload this `backend` folder to your VPS (e.g., via SFTP or Git).
2. **Permissions**: Make the setup script executable:
   ```bash
   chmod +x vps_setup.sh
   ```
3. **Run Setup**:
   ```bash
   ./vps_setup.sh
   ```

## What the Script Does
- Installs system dependencies: `python3-venv`, `nginx`, `tesseract-ocr` (OCR), `poppler-utils` (PDF handling).
- Sets up a Python Virtual Environment (`.venv`).
- Installs Python packages from `requirements.txt`.
- Runs Migrations and Collects Static files.
- Configures **Gunicorn** as a system service.
- Configures **Nginx** to serve the app and static files.

## Manual Configuration Required
After running the script:
1. **Edit .env**:
   Open `.env` and set `DEBUG=False` and `ALLOWED_HOSTS=your_domain_or_ip`.
   ```bash
   nano .env
   ```

2. **Configure Domain in Nginx**:
   Open the Nginx config:
   ```bash
   sudo nano /etc/nginx/sites-available/metavara
   ```
   Find `server_name YOUR_DOMAIN_OR_IP;` and change it to your actual domain or VPS IP address.

3. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

## Troubleshooting
- **Logs**:
  - Gunicorn: `sudo journalctl -u metavara`
  - Nginx: `/var/log/nginx/error.log`

## Dependencies Note
Product features like OCR (Tesseract) and PDF conversion are pre-installed by the script. If you move servers, ensure `tesseract-ocr` and `poppler-utils` are installed via `apt-get`.

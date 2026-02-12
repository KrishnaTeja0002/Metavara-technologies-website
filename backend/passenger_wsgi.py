import os
import sys

# Set up the path to the project
sys.path.insert(0, os.path.dirname(__file__))

# Import the application object from wsgi.py
from metavara.wsgi import application

import multiprocessing

bind = "0.0.0.0:8000"
workers = multiprocessing.cpu_count() * 2 + 1
accesslog = "/var/log/metavara_access.log"
errorlog = "/var/log/metavara_error.log"
capture_output = True
loglevel = "info"

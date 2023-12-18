#!/bin/bash
# Validate that the service is running successfully

# Example: Check if the service is responding to HTTP requests
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:80)
if [ $response -ne 200 ]; then
  echo "Validation failed: Service did not respond with HTTP 200 OK"
  exit 1
fi
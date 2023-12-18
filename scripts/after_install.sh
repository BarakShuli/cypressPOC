#!/bin/bash

# This script assumes the Angular project uses the Angular CLI for building.
# Build the Angular application and restart the service (adjust as needed).

echo "Running AfterInstall script..."

cd /var/www/CypressPOC
npm run build

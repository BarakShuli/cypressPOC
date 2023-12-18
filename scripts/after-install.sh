#!/bin/bash
# scripts/after-install.sh

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Angular CLI globally
sudo npm install -g @angular/cli

# Navigate to the project directory
cd /var/www/html

# Install project dependencies
npm install

# Build the Angular project
ng build --prod

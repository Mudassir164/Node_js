#!/bin/bash

# Navigate to the application directory
cd /var/www/my-node-app

# Install Node.js dependencies
npm install

# Restart the application service (if applicable)
# Replace 'your-app-service' with the actual service name or process
if systemctl is-active your-app-service; then
  systemctl restart your-app-service
fi

# Additional post-installation tasks (if needed)
# Example: Migrate databases, run environment-specific setup, etc.

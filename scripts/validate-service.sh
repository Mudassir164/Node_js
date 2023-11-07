#!/bin/bash

# Check if the Node.js application is running
if pgrep -f "node app.js" > /dev/null; then
  echo "Node.js application is running."
  exit 0
else
  echo "Node.js application is not running or failed to start."
  exit 1
fi

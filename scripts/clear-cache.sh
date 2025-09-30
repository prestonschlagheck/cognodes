#!/bin/bash

# Clear Next.js cache and restart development server
echo "Clearing Next.js cache..."

# Kill any running Next.js processes
pkill -f "next dev" 2>/dev/null || true

# Remove cache directories
rm -rf .next
rm -rf node_modules/.cache

echo "Cache cleared successfully!"
echo "Starting development server..."

# Start development server
npm run dev

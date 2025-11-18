#!/bin/bash

# Script to create a new project from this template
# Usage: ./create-project.sh <project-name>

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}📦 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if project name is provided
if [ -z "$1" ]; then
    print_error "Project name is required!"
    echo "Usage: ./create-project.sh <project-name>"
    echo "Example: ./create-project.sh my-new-website"
    exit 1
fi

PROJECT_NAME="$1"

# Validate project name (basic validation)
if [[ ! "$PROJECT_NAME" =~ ^[a-zA-Z0-9_-]+$ ]]; then
    print_error "Project name can only contain letters, numbers, hyphens, and underscores"
    exit 1
fi

# Get current directory and parent directory
CURRENT_DIR="$(pwd)"
PARENT_DIR="$(dirname "$CURRENT_DIR")"
NEW_PROJECT_DIR="$PARENT_DIR/$PROJECT_NAME"

# Check if target directory already exists
if [ -d "$NEW_PROJECT_DIR" ]; then
    print_error "Directory '$NEW_PROJECT_DIR' already exists!"
    exit 1
fi

print_step "Creating new project: $PROJECT_NAME"
echo "Source: $CURRENT_DIR"
echo "Target: $NEW_PROJECT_DIR"
echo

# Create new project directory
print_step "Creating project directory..."
mkdir -p "$NEW_PROJECT_DIR"

# Copy all contents except .git directory
print_step "Copying template files..."
rsync -av \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='dist' \
    --exclude='build' \
    --exclude='*.log' \
    --exclude='.DS_Store' \
    "$CURRENT_DIR/" \
    "$NEW_PROJECT_DIR/"

print_success "Template files copied successfully"

# Change to new project directory
cd "$NEW_PROJECT_DIR"

# Remove any existing .git directory (just in case)
if [ -d ".git" ]; then
    print_step "Removing existing git history..."
    rm -rf .git
fi

# Initialize new git repository
print_step "Initializing new git repository..."
git init
print_success "Git repository initialized"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    print_warning "pnpm not found. Installing dependencies with npm instead..."
    npm install
else
    print_step "Installing dependencies with pnpm..."
    pnpm install
fi

print_success "Dependencies installed successfully"

# Check if setup script exists and run it

# Create initial commit
print_step "Creating initial commit..."
git add .
git commit -m "Initial commit: Created from template"
print_success "Initial commit created"

print_step "Project setup complete! 🎉"
echo
echo -e "${GREEN}Your new project is ready at:${NC}"
echo -e "${BLUE}$NEW_PROJECT_DIR${NC}"
echo
echo -e "${YELLOW}Next steps:${NC}"
echo -e "${YELLOW}1.${NC}make sure to run the setup script! (e.g., 'pnpm run setup' or 'pnpm run setup:full')"
echo
print_success "Happy coding! 🚀"

cd ../$PROJECT_NAME
code .
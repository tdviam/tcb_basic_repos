# Node.js API Boilerplate

A clean, modular, and scalable structural boilerplate for building RESTful APIs using Node.js and Express.

---

## 🏗️ Project Architecture

This application follows a **layered architecture** pattern. It cleanly isolates server setup, environment management, routing logic, and request-response handling.

```text
my-node-app/
├── src/
│   ├── controllers/      # Contains business logic and handles API requests/responses
│   ├── routes/           # Maps HTTP endpoints to respective controllers
│   ├── app.js            # Configures Express application settings and global middleware
│   └── server.js         # Entry point responsible for booting the network server
├── .env                  # Environment variables (hidden from Git repositories)
├── .gitignore            # Dictates which files Git should completely ignore
└── package.json          # Declares project metadata, script commands, and dependencies
```

### Layer Breakdown

*   **`src/server.js`**: Separates network connection management from core application configuration. It securely loads environments and initiates listeners.
*   **`src/app.js`**: Initializes Express, applies global middleware blocks (like JSON parsers), and binds root routing scopes.
*   **`src/routes/`**: Acts as a gateway mapping URLs directly onto operational scripts without handling business operations.
*   **`src/controllers/`**: Executes actual request evaluations, constructs structured replies, and controls state flow.

---

## 🛠️ Prerequisites

Ensure you have the following frameworks installed locally on your system:
*   [Node.js](https://nodejs.org) (v18.0.0 or higher recommended)
*   [npm](https://npmjs.com) (Automatically bundles alongside Node.js)

---

## 🚀 Getting Started

Follow these step-by-step setup sequences to run this project in your local development environment.

### 1. Clone & Navigate
```bash
git clone <your-repository-url>
cd my-node-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environments
Create a new file named `.env` inside your root directory:
```env
PORT=3000
```

### 4. Execute Application
To boot the production instances:
```bash
npm start
```

---

## 🔌 API Documentation

### System Status
Verifies the operational status and response viability of the core service framework.

*   **URL:** `/api/health`
*   **Method:** `GET`
*   **Success Response:**
    *   **Code:** `200 OK`
    *   **Content:**
        ```json
        {
          "status": "success",
          "message": "System is healthy and running!"
        }
        ```

---

## 🐙 Basic Git Commands

Use these essential Git workflows to track your code changes and collaborate with your team.

### 1. Initialize and Commit
Set up your local repository and save your initial application state:
```bash
# Initialize a new local Git repository
git init

# Stage all project files for tracking
git add .

# Save your staged snapshot with a descriptive message
git commit -m "feat: initial project structure setup"
```

### 2. Connect to a Remote Server
Link your local codebase to a cloud repository (like GitHub or GitLab):
```bash
# Link your local repository to a remote server
git remote add origin <your-repository-url>

# Rename your primary default branch to 'main'
git branch -M main

# Push your committed changes to the cloud server
git push -u origin main
```

### 3. Everyday Development Flow
Follow this continuous cycle to safely implement new application features:
```bash
# Check the modification status of your working files
git status

# Stage a specific file or all modified files
git add .

# Record your updates permanently into project history
git commit -m "feat: add user controller logic"

# Safely upload your changes to the remote branch
git push origin main
```

### 4. Branch Management
Isolate your development experiments away from your stable production code:
```bash
# Create and immediately switch over to a new workspace branch
git checkout -b feature/add-database

# Switch back onto your primary production line
git checkout main

# Pull down the latest server modifications to stay updated
git pull origin main
```

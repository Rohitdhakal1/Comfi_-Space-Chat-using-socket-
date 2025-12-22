💬 Real-Time Chat Application (Socket.IO + React)

A simple real-time chat application built to demonstrate WebSocket-based communication using Socket.IO with a React + TypeScript frontend and an Express backend.

This project focuses on real-time messaging, user presence, and UI behavior.
All data (users and messages) is stored in server memory — no database is used.

✨ Features

Real-time messaging using Socket.IO

Online users list

Join / leave notifications

Message timestamps

Responsive chat UI

In-memory message handling (no database)

🛠 Tech Stack

Frontend

React

TypeScript

Vite

Tailwind CSS

Backend

Node.js

Express

Socket.IO

📁 Project Structure
.
├── client/        # React + Vite frontend
├── server/        # Express + Socket.IO backend
└── README.md

🚀 Getting Started (Run Locally)
1️⃣ Clone the repository
git clone https://github.com/Rohitdhakal1/Comfi_-Space-Chat-using-socket-.git
cd YOUR_REPO_NAME

2️⃣ Install dependencies
Frontend
cd client
npm install
npm run dev


Frontend runs on:
http://localhost:5173

Backend
cd server
npm install
npm run dev


Backend runs on:
http://localhost:8080

🔌 How It Works

Users connect via Socket.IO

Messages and users are stored temporarily in server memory

When a user joins or leaves, all connected clients are updated instantly

No database or authentication is implemented (by design)

📌 Notes

This project is intended for learning and demonstration purposes

Messages are cleared when the server restarts

Can be extended with:

Database (MongoDB / Redis)

User authentication

Chat rooms

Message persistence

🧠 Learning Outcomes

Understanding WebSocket communication

Managing real-time events with Socket.IO

React component design for live data

TypeScript usage in full-stack applications

📜 License

This project is open-source and free to use for learning purposes.
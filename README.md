Markdown

# 💬 Comfi Space Chat

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A lightweight, real-time chat application built to demonstrate **WebSocket-based communication**. This project features a **React + TypeScript** frontend and an **Express** backend, utilizing **Socket.IO** for instant bi-directional messaging.

> **Note:** This project utilizes in-memory storage. All data (users and messages) is reset when the server restarts.

---

## 📸 Screenshots

*(Add a screenshot of your application here to show off the UI)*

---

## ✨ Features

* **⚡ Real-time Messaging:** Instant message delivery using Socket.IO.
* **🟢 User Presence:** See a live list of online users.
* **🔔 Notifications:** Automatic alerts when users join or leave the chat.
* **⏱️ Timestamps:** Accurate time display for every message.
* **📱 Responsive UI:** Clean interface built with Tailwind CSS.
* **🚀 No Database Required:** Lightweight architecture using server-side memory.

---

## 🛠 Tech Stack

### Frontend
* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS

### Backend
* **Runtime:** Node.js
* **Server:** Express
* **Real-time Engine:** Socket.IO

---

## 📂 Project Structure

```bash
.
├── client/        # React + Vite frontend source
├── server/        # Express + Socket.IO backend source
└── README.md      # Project documentation
🚀 Getting Started
Follow these steps to run the application locally.

1. Clone the Repository
Bash

git clone [https://github.com/Rohitdhakal1/Comfi_-Space-Chat-using-socket-.git](https://github.com/Rohitdhakal1/Comfi_-Space-Chat-using-socket-.git)
cd Comfi_-Space-Chat-using-socket-
2. Setup Backend Server
Open a terminal, navigate to the server folder, install dependencies, and start the server.

Bash

cd server
npm install
npm run dev
The backend will start on http://localhost:8080

3. Setup Frontend Client
Open a new terminal window, navigate to the client folder, install dependencies, and start the React app.

Bash

cd client
npm install
npm run dev
The frontend will run at http://localhost:5173

🔌 How It Works
Connection: When a user opens the app, the React client connects to the Express server via a WebSocket handshake.

State Management: The server maintains a list of connected socket IDs and user details in memory.

Broadcasting:

Message: When a user types a message, it is emitted to the server, which broadcasts it to all other connected clients.

Events: Connection and disconnection events trigger updates to the "Online Users" list in real-time.

🔮 Future Improvements
Since this project is designed for learning, here are potential features to add for a production-ready app:

[ ] Persistence: Integrate MongoDB or Redis to save chat history.

[ ] Authentication: Add Login/Signup (JWT or OAuth).

[ ] Rooms: Allow users to create and join specific chat rooms.

[ ] Multimedia: Support for image and file sharing.

📜 License
This project is open-source and available for learning purposes. Feel free to fork and improve it!

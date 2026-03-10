# Comfi Space — Real-Time Chat

A simple real-time chat app built using **React + TypeScript** on the frontend and **Node.js + Socket.IO** on the backend.

The goal of this project was to understand how **WebSockets work** and how real-time communication can be implemented between multiple users.

Right now the app uses **in-memory storage**, so messages are lost when the server restarts. Persistent storage will be added later.

---

## Features

* Real-time messaging using Socket.IO
* Live list of online users
* Join / leave notifications
* Message timestamps
* Dark themed UI (black + green)
* Simple avatar icon generated from username

---

## Tech Stack

### Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* Socket.IO Client
* React Icons

### Backend

* Node.js
* Express
* Socket.IO
* TypeScript

---

## Project Structure

```
Comfi_-Space-Chat-using-socket-/
│
├── backend/
│   └── src/
│       ├── index.ts
│       └── interface.ts
│
├── client/
│   └── src/
│       ├── components/
│       ├── services/
│       │   └── Socket.ts
│       ├── interface.ts
│       ├── helper.tsx
│       └── App.tsx
│
├── .gitignore
└── README.md
```

---

## Running the Project

### 1. Clone the repository

```
git clone https://github.com/Rohitdhakal1/Comfi_-Space-Chat-using-socket-.git
cd Comfi_-Space-Chat-using-socket-
```

### 2. Start the backend

```
cd backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:8080
```

### 3. Start the frontend

```
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## How it works

When a user enters a username, the client connects to the server through Socket.IO.
The server keeps track of connected users and broadcasts messages to everyone in the chat.

Users joining or leaving are also broadcast so the online list updates in real time.

---

## Possible Improvements

Things I plan to add later:

* Database for persistent messages
* Authentication (JWT / OAuth)
* Chat rooms
* Private messages
* Typing indicators
* Deployment

---

## License

This project is open for learning and experimentation.

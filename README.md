# Comfi_ Space — Real-Time Chat

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socket.io&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=flat-square)]()

A real-time group chat application built with React, TypeScript, and Socket.IO. Built to understand how WebSocket-based communication works between multiple users.

> Uses **in-memory storage** — messages reset when the server restarts. Persistence is planned.

---

## Features

- Real-time messaging via Socket.IO
- Live online user list with avatars
- Join / leave notifications
- Message timestamps and double-tick indicator
- Dark UI — black and green theme
- Message history restored on reconnect

---

## Tech Stack

**Frontend** — React 19, TypeScript, Tailwind CSS v4, Socket.IO Client, React Icons

**Backend** — Node.js, Express, Socket.IO, TypeScript

---

## Project Structure

```
Comfi_-Space-Chat-using-socket-/
├── backend/
│   └── src/
│       ├── index.ts          # Server, Socket.IO events
│       └── interface.ts      # User, Message types
├── client/
│   └── src/
│       ├── components/       # Chat, Header, Sidebar, Login, Notification, MessageComponent
│       ├── services/
│       │   └── Socket.ts     # Socket.IO client instance
│       ├── interface.ts      # Frontend interfaces
│       ├── helper.tsx        # User avatar icon generator
│       └── App.tsx           # Root component
└── .gitignore
```

---

## Getting Started

**1. Clone**
```bash
git clone https://github.com/Rohitdhakal1/Comfi_-Space-Chat-using-socket-.git
cd Comfi_-Space-Chat-using-socket-
```

**2. Run the backend**
```bash
cd backend
npm install
npm run dev     # http://localhost:8080
```

**3. Run the frontend**
```bash
cd client
npm install
npm run dev     # http://localhost:5173
```

---

## How It Works

1. User enters a username → client connects and emits `JOIN`
2. Server stores the user and broadcasts the updated user list
3. Messages are emitted to the server and broadcast to all clients
4. Disconnect events remove the user and notify everyone

---

## Planned Features

- 1) Persistent storage — MongoDB or Redis
- 2) Authentication — JWT or OAuth
- 3) Chat rooms
- 4) Private messaging
- 5) Typing indicators
- 6) File and image sharing
- 7) Deployment — Render / Vercel

---

## License

Open-source. Free to use for learning and experimentation.

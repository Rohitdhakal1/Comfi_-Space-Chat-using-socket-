import type { Socket } from "socket.io-client";

export interface User{
  id:string,
  username:string,
}

export interface LoginProps{
    onLogin:(username:string)=>void
}

export interface chatProps{
    currentUser:User | null,
    onLogout :()=>void
}

export interface Message{
  message:string,
  user:User,
  timestamp:Date
}

export interface HeaderProps{
    currentUser:User | null,
    users:User[],
    onLogout:()=>void
}

export interface NotificationProps{
  type:"JOIN" | "leave" | "message",
  text:string
}

export interface SidebarProps{
  users:User[],
  currentUser:User | null
}

export interface MessageCompProps{
  user:User,
  socket:Socket,
  message:string,
  timestamp:Date
}
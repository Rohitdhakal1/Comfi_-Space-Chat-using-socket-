import React, { useState } from 'react'
import type { User } from "./interface";
import { socket } from './services/Socket';
import Login from './components/login';
import Chat from './components/chat';

function App() {

  const [currentUser,setCurrentUser] = useState<User | null >(null);

  const handleLogin = (username:string)=>{
    socket.connect(); 
    socket.emit("JOIN",username);
    setCurrentUser({id : socket.id!,username});

  }

  const handleLogout = (username:string)=>{
    socket.emit("userLeft",username);
    socket.disconnect();
    setCurrentUser(null);
  }



  return (
    <>
   <div className='min-h-screen bg-grey-100 flex flex-col'>
    { 
      !currentUser ? <Login onLogin={handleLogin}/>
                  : <Chat currentUser={currentUser} onLogout={handleLogout}/>
    }
      
   </div>
    </>
  )
}

export default App
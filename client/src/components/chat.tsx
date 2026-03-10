import { useEffect, useRef, useState, type FormEvent } from 'react'
import type { chatProps, Message, User } from '../interface'
import { socket } from '../services/Socket';
import Header from './header';
import Notification from './notification';
import Sidebar from './sidebar';
import { FiSend } from 'react-icons/fi';
import MessageComp from './messageComponent';

const Chat = ({currentUser,onLogout}:chatProps) => {

  const [message,setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [user,setUser] = useState<User[]>([]);
  const [notification,setNotification] = useState<{text:string,type: "JOIN" | "leave" | "message"} | null>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
   messageEndRef.current?.scrollIntoView({behavior:"smooth"});
  },[messages])

  useEffect(()=>{
    if(notification){
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4000);
      return ()=>clearTimeout(timer);
    }
  },[notification])

  useEffect(()=>{
    const handleNewMessage = (newMessage:Message)=>{
      setMessages((prev)=>[...prev,newMessage]);
    }
    const handleNewMessageHistory = (messagesHistory:Message[])=>{
      setMessages(messagesHistory)
    }
    const handleUserList = (userList:User[])=>{
      setUser(userList);
    }
    const handleUserJoined = (username:string)=>{
      setNotification({text:`${username} joined the chat` , type:"JOIN"})
    }
    const handleUserLeft = (username:string)=>{
      setNotification({text:`${username} left the chat`,type:"leave"})
    }

    socket.on("newMessage" , handleNewMessage)
    socket.on("messageHistory", handleNewMessageHistory);
    socket.on("userList",handleUserList)
    socket.on("userLeft",handleUserLeft);
    socket.on("userJoined", handleUserJoined);

    return ()=>{
      socket.off("newMessage" , handleNewMessage)
      socket.off("messageHistory", handleNewMessageHistory);
      socket.off("userList",handleUserList)
      socket.off("userLeft",handleUserLeft)
      socket.off("userJoined", handleUserJoined);
    }
  },[]);

  const handlesendMessage = (e: FormEvent)=>{
    e.preventDefault();
    if(message.trim()){
      socket.emit("sendMessage",message);
      setMessage('');
    }
  }

  return (
    <div className='flex flex-col h-screen bg-[#0d0d0d]'>

      {/* Header */}
      <Header currentUser={currentUser} onLogout={onLogout} users={user} />

      {/* notification */}
      {notification && <Notification text={notification.text} type={notification.type}/>}

      {/* main content */}
      <div className='flex flex-1 overflow-hidden'>

        {/* sidebar */}
        <Sidebar currentUser={currentUser} users={user} />

        {/* chat Area */}
        <div className='flex flex-1 flex-col bg-[#0d0d0d]'>

          {/* messages */}
          <div className='flex-1 p-4 overflow-y-auto'>
            <div className='max-w-3xl mx-auto space-y-4'>
              {
                messages.map(({user,timestamp,message},index)=>(
                  <div key={index} className={`flex ${user.id===socket.id?"justify-end":"justify-start"}`}>
                    <MessageComp socket={socket} message={message} timestamp={timestamp} user={user}/>
                  </div>
                ))
              }
              <div ref={messageEndRef}/>
            </div>
          </div>

          {/* message input */}
          <div className='p-4 bg-[#111111] border-t border-[#2a2a2a]'>
            <form onSubmit={handlesendMessage} className='max-w-3xl mx-auto'>
              <div className='relative flex items-center'>
                <input
                  type="text"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  placeholder='Type your message...'
                  className='w-full px-4 py-3 bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all'
                />
                <button
                  type='submit'
                  disabled={!message.trim()}
                  className='absolute right-2 p-2 text-black bg-green-500 hover:bg-green-400 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-green-500/20'
                >
                  <FiSend className='h-4 w-4'/>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Chat
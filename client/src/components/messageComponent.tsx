import type { MessageCompProps } from '../interface'
import { GetUserIcon } from '../helper';
import { BsCheck2All } from 'react-icons/bs';

const formatTime = (date:Date)=>{
    return new Date(date).toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit",
        hour12 :true
    });
}

function MessageComp({user,message,timestamp,socket}:MessageCompProps) {
  const isOwn = user.id === socket.id;
  return (
    <div className={`flex ${isOwn ? "flex-row-reverse" : ""}
        space-x-2 max-w-xs md:max-w-md`}>

        <div className='rounded-full overflow-hidden flex-shrink-0'>
            <GetUserIcon name={user.username} size={8}/>
        </div>

        <div className={`rounded-xl mx-2 p-3 shadow-md ${
            isOwn
              ? "bg-green-500 text-black rounded-br-none"
              : "bg-[#1e1e1e] border border-[#2a2a2a] text-white rounded-bl-none"
        }`}>

            <div className='flex items-baseline space-x-2 mb-1'>
                <span className={`text-xs font-semibold ${isOwn ? "text-black/70" : "text-green-400"}`}>
                    {user.username}
                    {isOwn && " (You)"}
                </span>
                <span className={`text-xs ${isOwn ? "text-black/50" : "text-gray-500"}`}>
                    {formatTime(timestamp)}
                </span>
            </div>

            <p className='text-sm'>{message}</p>

            {isOwn && (
                <div className='flex justify-end mt-1'>
                    <BsCheck2All className='h-3 w-3 text-black/50'/>
                </div>
            )}
        </div>
    </div>
  )
}

export default MessageComp
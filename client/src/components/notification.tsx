import type { NotificationProps } from '../interface'
import { FiLogOut, FiMessageSquare, FiUserPlus } from 'react-icons/fi'

function Notification({text,type}:NotificationProps) {
  return (
    <div className={`text-center py-2 text-sm font-medium animate-fade-in flex items-center justify-center space-x-2 border-b
      ${type==="JOIN"
        ? "bg-green-500/10 text-green-400 border-green-500/20"
        : type==="leave"
        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
      }`}>
      {type==="JOIN"
        ? <FiUserPlus className='h-4 w-4'/>
        : type==="leave"
        ? <FiLogOut className='h-4 w-4'/>
        : <FiMessageSquare className='h-4 w-4'/>
      }
      <span>{text}</span>
    </div>
  )
}

export default Notification
import type { HeaderProps } from "../interface";
import { RiMessage2Fill } from "react-icons/ri";
import { GetUserIcon } from "../helper";
import { FiLogOut } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

const Header = ({ currentUser, users, onLogout }: HeaderProps) => {
  return (
    <header className="bg-[#111111] border-b border-[#2a2a2a]">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">

            {/* brand logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-2 rounded-xl shadow-lg shadow-green-500/20">
                <RiMessage2Fill className="h-5 w-5 text-black" />
              </div>
              <h1 className="text-xl font-semibold text-white">
                Comfi_ Space
              </h1>
            </div>

            {/* user profile */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3 px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#1a1a1a]">
                <div className="relative">
                  <GetUserIcon name={currentUser?.username} size={7} />
                  <div className="absolute bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#111111]"></div>
                </div>
                <span className="text-sm font-medium text-gray-200">
                  {currentUser?.username}
                </span>
              </div>

              <button
                onClick={() => onLogout()}
                className="p-2 text-gray-500 hover:text-white rounded-full hover:bg-[#1e1e1e] transition-all"
              >
                <FiLogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* online users bar */}
        <div className="px-4 py-2 bg-[#0d0d0d] border-t border-[#2a2a2a] flex items-center space-x-2 overflow-x-auto">
          <div className="flex -space-x-2 mr-3">
            {users.slice(0, 5).map((user) => (
              <div key={user.id} className="relative group">
                <div className="w-8 h-8 rounded-full ring-2 ring-[#0d0d0d]">
                  <GetUserIcon name={user.username} size={8} />
                </div>
              </div>
            ))}
            {users.length > 5 && (
              <div className="w-8 h-8 rounded-full ring-2 ring-[#0d0d0d] bg-[#1e1e1e] flex items-center justify-center">
                <span className="text-xs font-medium text-gray-400">+{users.length - 5}</span>
              </div>
            )}
          </div>
          <div className="h-4 w-px bg-[#2a2a2a]"></div>
          <span className="text-sm text-gray-500 flex items-center">
            <BsCircleFill className="h-2 w-2 text-green-500 mr-2" />
            {users.length} Online
          </span>
        </div>
      </header>
  );
};

export default Header;

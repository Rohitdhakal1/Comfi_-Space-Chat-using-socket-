import { GetUserIcon } from "../helper";
import { type SidebarProps } from "../interface";

function Sidebar({ users, currentUser }: SidebarProps) {
  return (
    <div className="hidden md:block w-64 bg-[#111111] border-r border-[#2a2a2a]">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
          Active Members — {users.length}
        </h3>

        <div className="space-y-1">
          {currentUser && users.map((user) => (
            <div
              key={user.id}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
              ${user.id === currentUser.id
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200"}`}
            >
              <div className="relative">
                <GetUserIcon name={user.username} size={6} />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#111111]" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {user.username}
                  {user.id === currentUser.id && (
                    <span className="ml-1 text-xs text-green-500">(You)</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar
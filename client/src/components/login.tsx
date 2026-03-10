import React, { useState } from "react";
import type { LoginProps } from "../interface";

function Login({onLogin} : LoginProps) {
  const [username, setUsername] = useState<string>("");

  const handlesubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    if(username.trim()){
      onLogin(username);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] p-4">
      <div className="w-full max-w-md bg-[#111111] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden border border-[#2a2a2a]">

        {/* top green accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-green-500 to-green-400"></div>

        <div className="px-8 py-12">

          {/* header */}
          <div className="text-center mb-9">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500/10 p-3 rounded-2xl border border-green-500/20">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Welcome To Comfi_ Space
            </h1>
            <p className="mt-2 text-gray-500">Join the conversation</p>
          </div>

          {/* login form */}
          <form onSubmit={handlesubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-400">
                Choose a username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all duration-200 placeholder:text-gray-600"
                  required
                />
                {username && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                )}
              </div>
            </div>

            <button
              disabled={!username.trim()}
              type="submit"
              className="w-full px-4 py-3 text-white font-semibold bg-green-500 hover:bg-green-400 rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-500 shadow-lg shadow-green-500/20"
            >
              Join Chat
            </button>
          </form>

          {/* footer */}
          <div className="mt-8 pt-6 border-t border-[#2a2a2a]">
            <p className="text-center text-sm text-gray-600">
              By joining, you agree to our{" "}
              <a href="#" className="text-green-500 hover:text-green-400">Terms</a>
              {" "}and{" "}
              <a href="#" className="text-green-500 hover:text-green-400">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

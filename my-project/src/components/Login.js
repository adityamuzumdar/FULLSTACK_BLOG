import React from 'react';
import { useState } from "react";
import {Navigate} from "react-router-dom";

export default function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);


  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
        setRedirect(true);
    }
    else{
        alert('wrong credentials');
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
    return (
        <div className="p-5 relative flex flex-col justify-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-slate-800">
                   Login
                </h1>
                <form className="mt-6" onSubmit={login}>  
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={username}
                            onChange={ev=>setUsername(ev.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password}
                            onChange={ev=>setPassword(ev.target.value)}
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
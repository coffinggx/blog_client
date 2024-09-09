import PageLayout from "./PageLayout";
import { useState } from "react";
import axios from "axios";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {username, password});
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
    
  }
  return( 
  <PageLayout>
     <div className="flex flex-col max-w-xl mx-auto my-auto h-full mt-32 rounded-lg items-center shadow-lg shadow-red-300 overflow-hidden  bg-slate-300 px-10 py-8 border- gap-8">
      <span className="text-bold text-5xl text-center font-mono">Sign in </span>
      <input type="text" className="w-full p-4 text-2xl border-black border-2 rounded-md" onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" className="w-full p-4 text-2xl border-black border-2 rounded-md" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className="bg-red-500 text-white text-2xl p-4 w-full rounded-md font-mono">Login</button>
  </div>
  </PageLayout>
)}

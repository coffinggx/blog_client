import { useState } from "react";
export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/register", {username, email, fullname, password, avatar});
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    }
    return (
        <div className="flex flex-col max-w-xl mx-auto my-auto h-full mt-32 rounded-lg items-center shadow-lg shadow-red-300 overflow-hidden  bg-slate-300 px-10 py-8 border- gap-8">
            <span className="text-bold text-5xl text-center font-mono">Register</span>
            <input type="text" className="w-full p-4 text-2xl border-black border-2 rounded-md" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="email" className="w-full p-4 text-2xl border-black border-2 rounded-md" onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" className="w-full p-4 text-2xl border-black border-2 rounded-md" onChange={e => setFullname(e.target.value)} placeholder="Fullname" />
            <input type="password" className="w-full p-4 text-2xl border-black border-2 rounded-md" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <div className="w-full p-4 text-2xl border-black border-2 rounded-md flex items-center justify-center">
              <label htmlFor="avatar" className="flex-1">
                <input type="file" id="avatar" accept="image/*" onChange={e => setAvatar(e.target.files[0])} className="hidden" />
                <div className="flex items-center justify-center border-2 border-dashed rounded-md p-2">
                  {
                    avatar ? <img src={URL.createObjectURL(avatar)} className="max-w-full h-auto" alt="Avatar" /> :
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-lg font-bold">Drag and drop image here</span>
                      <span className="text-sm text-gray-500">or click to browse</span>
                    </div>
                  }
                </div>
              </label>
            </div>
            <button onClick={handleRegister} className="bg-red-500 text-white text-2xl p-4 w-full rounded-md font-mono">Register</button>
        </div>
    )
}

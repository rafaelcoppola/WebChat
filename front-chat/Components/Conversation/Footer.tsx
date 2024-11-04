import { useContext, useState } from "react";
import AppContext from "../Context/AppContext";

export default function Footer() {
    const {contactName} = useContext(AppContext);
    const [message, setMessage] = useState("");
    let username = contactName;

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/messages',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                message,
                username,
            })
        })
        
        setMessage("");
    }

    return (
        <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <form onSubmit={submit}>
                <div className="flex items-center">
                    <input type="text" placeholder="Type a message..." value={message} onChange={e => setMessage(e.target.value)} className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 text-black" />
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
                        Enviar
                    </button>
                </div>
            </form>
        </footer>
    );
}
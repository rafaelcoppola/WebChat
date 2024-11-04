'use client'

import { useState } from "react";
import AppContext from "./AppContext";

export default function Provider({ children }: { children: React.ReactNode; }) {
    const [contactName, setContactName] = useState('Alice');
    const [messages, setMessages] = useState([]);

    const data = {
        contactName,
        setContactName,
        messages,
        setMessages
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}
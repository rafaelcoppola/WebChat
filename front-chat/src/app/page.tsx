"use client"

import { useState } from "react";
import Contacts from "../../Components/Contacts/Contacts";
import Conversation from "../../Components/Conversation/Conversation";

export default function Home() {
    return (
        <div className="flex h-screen overflow-hidden ">
            <Contacts/>

            <Conversation/>
        </div>
    );
}

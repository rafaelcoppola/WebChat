import { useContext, useEffect } from "react";
import ContactMessage from "./ContactMessage";
import MyMessage from "./MyMessage";
import AppContext from "../Context/AppContext";
import Pusher from "pusher-js";

export default function MessageContainer() {
    const { messages, setMessages } = useContext(AppContext);
    let allMessages = [];

    useEffect(() => {
        // Pusher.logToConsole = true;

        const pusher = new Pusher('b356515a8819647f9998', {
            cluster: 'sa1'
        });

        const channel = pusher.subscribe('chat');

        channel.bind('message', function (data: any) {
            console.log(data)
            allMessages.push(data);
            setMessages(allMessages);


        });

    })


    return (
        <div className="h-screen overflow-y-auto p-4 pb-36">
            {messages.map(message => {
                return (
                    <>
                        <ContactMessage messageContact={message.message} />

                        <MyMessage myMessage={message.message} />
                    </>
                )
            })}

        </div>
    )
}
import { useContext } from "react";
import AppContext from "../Context/AppContext";

export default function ContactList() {
    const { setContactName, setMessage } = useContext(AppContext);

    function contactHandler(contactName: string) {
        setContactName(contactName)
    }

    return (
        <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
            <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                    {/* <Image width={'10'} height={'10'} src="" alt="User Avatar" className="w-12 h-12 rounded-full"/> */}
                </div>
                <div className="flex-1" onClick={(e) => contactHandler("Alice")}>
                    <h2 className="text-lg font-semibold">Alice</h2>
                    <p className="text-gray-600">Hi Alice! I'm good, just finished a great book. How about you?</p>
                </div>
            </div>

            <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                    {/* <Image width={'10'} height={'10'} src="" alt="User Avatar" className="w-12 h-12 rounded-full"/> */}
                </div>
                <div className="flex-1" onClick={(e) => contactHandler("Martin")}>
                    <h2 className="text-lg font-semibold">Martin</h2>
                    <p className="text-gray-600">That pizza place was amazing! We should go again sometime. 🍕</p>
                </div>
            </div>
        </div>
    );
}
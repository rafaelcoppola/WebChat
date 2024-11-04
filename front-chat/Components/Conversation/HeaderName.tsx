import { useContext } from "react";
import AppContext from "../Context/AppContext";

export default function HeaderName() {
    const {contactName} = useContext(AppContext);

    return (
        <header className="bg-gray-200 p-4 text-gray-700">
            <h1 className="text-2xl font-semibold">{contactName}</h1>
        </header>
    );
}
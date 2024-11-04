import Header from "../Header";
import ContactList from "./ContactList";

export default function Contacts() {
    return (
        <main className="w-1/4 bg-white border-r border-gray-300 ">
            <Header />

            <ContactList />
        </main>
    )
}

import Footer from "./Footer";
import HeaderName from "./HeaderName"
import MessageContainer from "./MessageContainer";

export default function Conversation() {
    return (
        <div className="flex-1 bg-white ">
            <HeaderName />

            <MessageContainer />

            <Footer />
        </div>
    );
}
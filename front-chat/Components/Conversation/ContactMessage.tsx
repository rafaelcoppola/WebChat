export default function ContactMessage(props) {
    const {ContactMessage} = props;
    
    return (
        <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                {/* <Image width={'10'} height={'10'} src="" alt="User Avatar" className="w-8 h-8 rounded-full"/> */}
            </div>
            <div className="flex max-w-96 bg-green-300 rounded-lg p-3 gap-3">
                <p className="text-gray-700">{ContactMessage}</p>
            </div>
        </div>
    );
}
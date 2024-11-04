export default function MyMessage(props) {
    const {myMessage} = props;   
    return (
        <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                <p>{myMessage}?</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                {/* <Image width={'10'} height={'10'} src="" alt="My Avatar" className="w-8 h-8 rounded-full"/> */}
            </div>
        </div>
    );
}
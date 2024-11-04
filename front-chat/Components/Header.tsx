export default function Header() {
    return (
        <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
            <h1 className="text-2xl font-semibold">Chat Web</h1>
            <div className="relative">
                <button id="menuButton" className="focus:outline-none">
                Dark Mode
                </button>
                {/* <div id="menuDropdown" className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                    <ul className="py-2 px-3">
                        <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Dark Mode</a></li>
                    </ul>
                </div> */}
            </div>
        </header>
    )
}
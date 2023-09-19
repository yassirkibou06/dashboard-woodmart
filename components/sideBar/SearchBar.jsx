
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className="flex px-10 py-3 ml-1 mb-5 bg-white w-auto shadow-sm rounded-sm items-center justify-between space-x-4" >
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiSearch />
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="py-1 pl-10 pr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg border-[1px] border-gray-300">
                    <FiBell className="text-xl cursor-pointer" />
                </div>
                <div className="p-2 rounded-lg border-[1px] border-gray-300">
                    <FiUser className="text-xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;

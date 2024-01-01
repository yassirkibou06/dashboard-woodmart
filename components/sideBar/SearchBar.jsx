
import { FiBell, FiUser } from 'react-icons/fi';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const SearchBar = ({ open,setOpen }) => {
    return (
        <div className={`absolute duration-75 w-full left-0 top-0 ${open ? "md:w-[1105px]  md:left-64" : "md:w-[1297px] md:left-[63px]"} bg-white px-10 py-4 rounded-sm`}>
            <div className="flex items-end justify-end space-x-4" >
                <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg border-[1px] border-gray-300">
                        <FiBell className="text-xl cursor-pointer" />
                    </div>
                    <div className="p-2 rounded-lg border-[1px] border-gray-300">
                        <FiUser className="text-xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;

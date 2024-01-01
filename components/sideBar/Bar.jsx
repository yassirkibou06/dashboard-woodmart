"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSell } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';


const Bar = ({ open, setOpen }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkIsMobile();

        // Add a listener for window resizing
        window.addEventListener('resize', checkIsMobile);

        return () => {
            // Clean up the listener when the component unmounts
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const closeSidebar = () => {
        if (isMobile && open) {
            setOpen(!open);
        }
    };

    const navLink = [
        {
            path: "/",
            name: "Dashboard",
            icon: <RxDashboard />,
            messg: "6"
        },
        {
            path: "/products",
            name: "Products",
            icon: <BsBoxSeam />
        },
        {
            path: "/categories",
            name: "Categories",
            icon: <HiOutlineShoppingCart />
        },
        {
            path: "/orders",
            name: "Orders",
            icon: <MdOutlineSell />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile />
        }
    ]

    return (
        <>
            {
                navLink.map((item, index) => (
                    <Link href={item.path} onClick={closeSidebar} key={index} className={`flex ${open ? 'mt-7 p-3 gap-3' : 'gap-5 mt-4 pl-1 w-10 h-10 items-center'} rounded-[15px] 
                    hover:bg-gray-100 duration-500`}>
                        <div className="text-2xl">
                            {item.icon}
                        </div>
                        <div className='relative flex items-center gap-80 md:gap-32'>
                            <h2 className='font-medium md:text-[0.92rem]'>{item.name}</h2>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default Bar;
"use client"
import { useState } from "react";
import SideBar from "@/components/sideBar/SideBar";
import SearchBar from '@/components/sideBar/SearchBar'

const AllFiles = ({children}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative grid grid-cols-1 ${open ? "md:grid-cols-open" : "md:grid-cols-close"} grid-rows-1 font-Poppins transition duration-700 overflow-x-hidden`}>
            <SearchBar open={open} setOpen={setOpen} />
            <SideBar open={open} setOpen={setOpen} />
            {children}
        </div>
    )
}

export default AllFiles
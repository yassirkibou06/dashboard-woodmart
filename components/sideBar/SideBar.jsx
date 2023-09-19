"use client"

import { useState } from "react";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import Bar from "./Bar";


const SideBar = ({ open, setOpen }) => {
    return (
        <>
            <div className={`sticky left-0 top-0 h-[100vh] z-[999] border-r border-gray-200 py-4 px-3 ${open ? 'scroll' : 'overflow-hidden'}`}>
                <div className={`${open ? "flex items-center justify-between border-b border-gray-200" : "none"} py-5`}>
                    {open ?
                        <div className="">
                            <h1 className="font-bold text-lg ml-2">Woodmart</h1>
                        </div>
                        : ""
                    }
                    {open ? (
                        <button
                            className="btn-open"
                            onClick={() => setOpen(!open)} >
                            <MdOutlineKeyboardDoubleArrowLeft size={22} />
                        </button>
                    ) : (
                        <button
                            className="w-fit fixed z-20 md:absolute btn-open"
                            onClick={() => setOpen(!open)} >
                            <MdOutlineKeyboardDoubleArrowRight size={22} />
                        </button>
                    )}
                </div>
                <div className={`${open ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                    <div className={`flex items-center mt-5 ${open ? 'gap-2'
                        : 'gap-5 w-10 pr-1'}`}>
                    </div>
                    <Bar open={open} />
                </div>
            </div>
        </>
    );
};

export default SideBar;

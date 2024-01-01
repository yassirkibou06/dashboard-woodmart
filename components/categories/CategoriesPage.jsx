"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import UploadCategory from "./UploadCategory"
import CategoryList from "./CategoryList"


const CategoriesPage = () => {
    const [responseName, setResponseName] = useState({
        id:"",
        name:""
    });
console.log(responseName)
    return (
        <div className="for-all px-7 pt-28 pb-7">
            <h2 className="font-meduim text-[28px]">Category</h2>
            <div className="flex gap-2 items-center">
                <Link className="text-gray-400 font-medium text-[13px] hover:text-primary" href="/">Home</Link>
                <span className="bg-gray-400 mx-1 w-1 h-1 rounded-full"></span>
                <h4 className="text-gray-400 font-medium text-[13px]">Category List</h4>
            </div>
            <div className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-[410px,1fr]">
                <UploadCategory responseName={responseName} setResponseName={setResponseName} />
                <CategoryList name={responseName} />
            </div>
        </div>
    )
}

export default CategoriesPage;
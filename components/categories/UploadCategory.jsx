"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from '../ui/label'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import AlertShowing from "../AlertShowing"


const UploadCategory = ({ responseName, setResponseName }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [showAlert, setShowAlert] = useState(false);
    const [categoryName, setCategoryName] = useState({
        id: "",
        name: ""
    });
    const fetchUrl = `${apiUrl}/SaveCategorie`;

    const handleChange = (event) => {
        setCategoryName({ ...categoryName, name: event.target.value });
    };

    const saveUser = async (e) => {
        e.preventDefault();
        if (!categoryName.name.trim()) {
            alert('Please enter a category name.');
            return;
        }

        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": "Bearer " + token,
            },
            body: JSON.stringify(categoryName),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const _name = await response.json();
        setResponseName(_name);
        setShowAlert(true)
        reset();
    };

    const reset = (e) => {
        //e.preventDefault();
        setCategoryName({
            name: ""
        });
    };

    return (
        <div className="bg-white p-8 w-[370px] h-fit rounded-ROne mb-5">
            <h4 className="font-medium text-lg">Add Category</h4>
            <div className="flex flex-col items-center justify-start">
                <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        value={categoryName.name}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                </div>
                {/**Button */}
                <div className="mt-8 grid">
                    <Button onClick={(e) => saveUser(e)} >Add Category</Button>
                </div>
            </div>
            {showAlert && <AlertShowing showAlert={showAlert} />}
        </div >
    );
};

export default UploadCategory;

"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from '../ui/label'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import AlertShowing from "../AlertShowing"


const EditProduct = ({ prodId, setResponseProd, setOpen, open }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [products, setProducts] = useState({
        name: "",
        file: null,
        currentPrice: "",
        sku: "",
        quantity: ""
    });
    const fetchUrl = `${apiUrl}/products`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl + "/" + prodId, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token,
                    },
                });
                const _products = await response.json();
                setName(_products);

            } catch (error) {
                console.log(error);
            }
        };
        if (prodId) {
            fetchData();
        }
    }, [prodId]);

    const handleChange = (event, property) => {
        setProducts({
            ...products,
            [property]: event.target.value,
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProducts({
                ...products,
                file: file,
            });
        }
    };

    const reset = (e) => {
        e.preventDefault();
        setOpen(false)
    };

    const updateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", products.file);
        formData.append("name", products.name);
        formData.append("currentPrice", products.currentPrice);
        formData.append("sku", products.sku);
        formData.append("quantity", products.quantity);
        try {
            const response = await fetch(fetchUrl + "/" + prodId, {
                method: "PUT",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const _products = await response.json();
            setResponseProd(_products);
            setOpen(false)
            reset(e)
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };
    console.log(products)

    return (
        <>
            <div className={`${open ? "absolute bg-background/80 backdrop-blur-sm data-[state=open]:animate-in z-995 left-0 top-0 w-full h-[150%]" : "hidden"}`} ></div>
            <div className="absolute left-[38%] top-[15%] z-999 border bg-background shadow-lg duration-200 p-6 w-auto h-fit rounded-ROne" >
                <h4 className="font-medium text-lg">Update Product</h4>
                <div className="flex flex-col gap-10 mb-5">
                    <div>
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                value={products.name}
                                placeholder="Name"
                                onChange={(event) => handleChange(event, 'name')}
                            />
                        </div>
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="currentPrice">Price</Label>
                            <Input
                                type="text"
                                value={products.currentPrice}
                                placeholder="currentPrice"
                                onChange={(event) => handleChange(event, 'currentPrice')}
                            />
                        </div>
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="sku">SKU</Label>
                            <Input
                                type="text"
                                value={products.sku}
                                placeholder="SKU"
                                onChange={(event) => handleChange(event, 'sku')}
                            />
                        </div>
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                type="text"
                                value={products.quantity}
                                placeholder="Quantity"
                                onChange={(event) => handleChange(event, 'quantity')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="photo">Picture</Label>
                            <Input
                                id="photo"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    {/**Button */}
                    <div className="h-14 my-4 space-x-5 pt-4 text-center">
                        <button
                            onClick={updateProduct}
                            className="rounded text-white font-medium bg-green-500 hover:bg-green-400 py-2 px-6">
                            Update
                        </button>
                        <button
                            onClick={reset}
                            className="rounded ml-5 text-white font-medium bg-gray-700 hover:bg-red-500 py-2 px-6">
                            Close
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default EditProduct;

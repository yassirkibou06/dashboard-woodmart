import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import AlertShowing from "../AlertShowing";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const AddProducts = ({ responseProduct, setResponseProduct }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [showAlert, setShowAlert] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState({
        name: "",
        file: null,
        currentPrice: "",
        sku: "",
        quantity: "",
        category: "",
    });

    const fetchUrl = `${apiUrl}/addProduct`;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProducts({
                ...products,
                file: file,
            });
        }
    };


    const handleChange = (event, property) => {
        setProducts({
            ...products,
            [property]: event.target.value,
        });
    };

    const handleCategorySelect = (selectedCategory) => {
        setProducts({
            ...products,
            category: selectedCategory,
        });
    };



    const addProduct = async (e) => {
        e.preventDefault();

        if (!products.name.trim()) {
            alert("Please enter a name for Product.");
            return;
        }
        if (products.sku === null) {
            alert("Please enter a Sku for Product.");
            return;
        }
        if (products.price === null) {
            alert("Please enter a price");
            return;
        }
        if (products.quantity === null) {
            alert("Please enter a quantity");
            return;
        }
        if (products.file === null) {
            alert("Please select an image for the product.");
            return;
        }

        const formData = new FormData();
        formData.append("file", products.file);
        formData.append("name", products.name);
        formData.append("currentPrice", products.currentPrice);
        formData.append("sku", products.sku);
        formData.append("quantity", products.quantity);
        formData.append("category", products.category);

        try {
            const response = await fetch(`${apiUrl}/products/addProduct`, {
                method: "POST",
                body: formData
            });

            /*if (!response.ok) {
                throw new Error("Something went wrong");
            }*/

            if (response.status === 200) {
                alert("Product added successfully");
                setShowAlert(true);
                reset();
            } else {
                alert("Error adding product");
            }

            const product = await response.json();
            setResponseProduct(product);
            //reset();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const reset = () => {
        setProducts({
            name: "",
            file: null,
            currentPrice: "",
            sku: "",
            quantity: "",
            category: "",
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/Categories`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchData();
    }, [apiUrl]);
    //console.log(products);

    return (
        <div className="for-all px-7 pt-32 pb-7">
            <h2 className="font-medium text-[28px]">Add Products</h2>
            <div className="flex gap-2 items-center">
                <Link className="text-gray-400 font-medium text-[13px] hover:text-primary" href="/">Home</Link>
                <span className="bg-gray-400 mx-1 w-1 h-1 rounded-full"></span>
                <h4 className="text-gray-400 font-medium text-[13px]">Add Product</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-addProduct grid-rows-1 mt-10 px-5 md:px-20 gap-5">
                <div className="bg-white p-8 w-auto h-fit rounded-ROne mb-5">
                    <h4 className="font-medium text-lg">General</h4>
                    <div className="flex flex-col items-center justify-start">
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
                    <div className="mt-8 hidden md:grid">
                        <Button onClick={(e) => {
                            addProduct(e);
                        }}>Add Product</Button>
                    </div>
                    <div className="absolute left-[45%] top-[10%]">
                        {showAlert && <AlertShowing showAlert={showAlert} />}
                    </div>
                </div>
                <div className="bg-white p-8 w-[370px] h-fit rounded-ROne">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="photo">Picture</Label>
                        <Input
                            id="photo"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            defaultValue={products.category}
                            onValueChange={handleCategorySelect}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((item) => (
                                    <SelectItem
                                        key={item.id}
                                        value={item.name}
                                    >
                                        {item.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-8 grid md:hidden">
                        <Button onClick={(e) => {
                            addProduct(e);
                        }}>Add Product</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;

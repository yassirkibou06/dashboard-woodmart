"use client"
import { React, useState, useEffect } from "react";
import { columns } from "@/components/tableDataForOrder/columns";
import { DataTable } from "@/components/tableDataForOrder/data-table";
import { ScaleLoader } from "react-spinners";

const OrderList = ({ product }) => {
    /*const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prodId, setProdId] = useState(null);
    const [responseProd, setResponseProd] = useState(null);
    const [open, setOpen] = useState(false);
    const fetchUrl = `${apiUrl}/products`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(fetchUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + token,
                    },
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [product, responseProd]);

    const deleteProduct = (e, id) => {
        e.preventDefault();
        fetch(fetchUrl + "/" + id, {
            method: "DELETE",
            headers: {
                //"Authorization": "Bearer " + token,
            },
        }).then((res) => {
            if (data) {
                setData((prevElement) => {
                    return prevElement.filter((nameI) => nameI.id !== id);
                });
            }
        });
    };

    const editProduct = (e, id) => {
    e.preventDefault();
    setProdId(id);
    setOpen(true)
  };*/

    const data = [
        {
            idOrder: "#479063DR",
            photo: "",
            name: "William Watson",
            quantity: "1",
            total: 171.00,
            data: "16 Jan, 2023"
        },
        {
            idOrder: "#88063DR",
            photo: "",
            name: "William Watson",
            quantity: "1",
            total: 171.00,
            data: "16 Jan, 2023"
        }
    ];

    return (
        <>
            {/*loading && <div className="flex items-center justify-center"><ScaleLoader width={2} height={15} color="#1c61e7" /></div>*/}
            {/*!loading && (
                <DataTable columns={columns} columns={columns(deleteProduct, editProduct)} data={data} />
            )*/
            }
            <DataTable columns={columns} data={data} />
            {/*open && <EditProduct prodId={prodId} setResponseProd={setResponseProd} setOpen={setOpen} open={open} />*/}
        </>
    );
}

export default OrderList;
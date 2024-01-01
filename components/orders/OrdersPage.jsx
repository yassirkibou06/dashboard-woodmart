"use client"
import { useState } from "react";
import Link from "next/link"
import OrderList from "./OrderList";

const OrdersPage = () => {
  return (
    <div className="for-all px-7 pt-28 pb-7">
            <h2 className="font-meduim text-[28px]">Order List</h2>
            <div className="flex gap-2 items-center">
                <Link className="text-gray-400 font-medium text-[13px] hover:text-primary" href="/">Home</Link>
                <span className="bg-gray-400 mx-1 w-1 h-1 rounded-full"></span>
                <h4 className="text-gray-400 font-medium text-[13px]">Order List</h4>
            </div>
            <div className="mt-11">
                <OrderList />
            </div>
    </div>
  )
}

export default OrdersPage
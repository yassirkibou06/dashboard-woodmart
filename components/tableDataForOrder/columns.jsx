"use client"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses } from "@/data/data"
import DataTableColumnHeader from "./data-table-column-header"
import DataTableRowActions from "./data-table-row-actions";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export const columns = () => [
  {
    accessorKey: "photo",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="" />
    ),
    cell: ({ row }) => {
      const base64String = row.getValue("photo");
      return (
        <div className="rounded-md bg-gray-200 w-20 h-20 ">
            <img src={`data:image/png;base64,${base64String}`} className="object-cover w-full h-full" alt="not found" />
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="PRODUCT" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "currentPrice",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="PRICE" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            ${row.getValue("currentPrice")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="SKU" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("sku")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="QTY" />
    ),
    cell: ({ row }) => <span className="max-w-[90px] font-medium bg-blue-400 p-2 text-white rounded-md">{row.getValue("quantity")}</span>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="Action" />
    ),
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { priorities, statuses } from "@/data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

export function DataTableToolbar({
    table,
}) {
    const isFiltered = table.getState().columnFilters.length > 0;
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter ..."
                    value={(table.getColumn("title")?.getFilterValue() || "")}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}

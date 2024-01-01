"use client"

import { useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "../ui/button";



function DataTableRowActions({ row}) {

  return (
    <>
    <Button>View Details</Button>
    </>
  );
}

export default DataTableRowActions;

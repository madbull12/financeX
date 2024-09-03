"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "~/components/ui/badge"
import { Checkbox } from "~/components/ui/checkbox"
export type FinancialRecord = {
    description:string;
    amount: number
    paymentMethod:string;
    createdAt:Date;
    category:string;
  }
   
export const columns: ColumnDef<FinancialRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }, {
    accessorKey: "description",
    header: () => <div className="text-right">Description</div>,
    cell: ({ row }) => {
      const description = row?.original?.description;
   
 
      return <div className="text-right font-medium">{description}</div>
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = row?.original?.amount;
   
 
      return <div className="text-right font-medium">$ {amount}</div>
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-right">Category</div>,
    cell: ({ row }) => {
      const category = row?.original?.category;
   
 
      return <div className="text-right font-medium">{category}</div>
    },
  },
  {
    accessorKey: "paymentMethod",
    header: () => <div className="text-right">Payment Method</div>,
    cell: ({ row }) => {
      const paymentMethod = row?.original?.paymentMethod;
   
 
      return <div className="text-right font-medium">{paymentMethod}</div>
    },
  },
]

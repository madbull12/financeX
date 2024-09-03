"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "~/components/ui/badge"
import { Checkbox } from "~/components/ui/checkbox"
export type FinancialRecord = {
    description:string;
    amount: number
    paymentMethod:string;
    createdAt:string;
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
  },
]

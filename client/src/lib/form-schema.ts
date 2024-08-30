"use client"
 
import { z } from "zod"
 
export const financialRecordSchema = z.object({
  description:z.string(),
  amount:z.string(),
  category:z.string(),
  paymentMethod:z.string(),
})

export type FinancialRecordType = z.infer<typeof financialRecordSchema>
import { z } from 'zod'

export const financialCreateSchema = z.object({
    userId: z.string(),
    date: z.date(),
    description: z.string().optional(),
    amount: z.number(),
    category: z.string(),
    paymentMethod: z.string()
})
export const financialUpdateSchema = z.object({
    userId: z.string(),
    date: z.date(),
    description: z.string().optional(),
    amount: z.number().optional(),
    category: z.string().optional(),
    paymentMethod: z.string().optional()
})
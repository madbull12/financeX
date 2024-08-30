'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { financialRecordSchema, FinancialRecordType } from '~/lib/form-schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
const FinancialRecordForm = () => {
      // 1. Define your form.
  const form = useForm<FinancialRecordType>({
    resolver: zodResolver(financialRecordSchema),
    defaultValues: {
        description:"",
        amount:"",
        category:"",
        paymentMethod:"",
    },
  });

  function onSubmit(values:FinancialRecordType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-3/4 mx-auto p-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="nyxb" {...field} />
              </FormControl>
       
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type='number' placeholder="nyxb" {...field} />
              </FormControl>
       
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="nyxb" {...field} />
              </FormControl>
       
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <Input placeholder="nyxb" {...field} />
              </FormControl>
       
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default FinancialRecordForm
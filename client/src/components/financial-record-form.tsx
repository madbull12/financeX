"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { financialRecordSchema, FinancialRecordType } from "~/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store";
import { addRecord, addRecordState } from "~/store/slices/financialRecord";
import { useUser } from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";
const FinancialRecordForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  // 1. Define your form.
  const form = useForm<FinancialRecordType>({
    resolver: zodResolver(financialRecordSchema),
    defaultValues: {
      description: "",
      amount: "",
      category: "",
      paymentMethod: "",
    },
  });
  const status = useSelector(
    (state: RootState) => state.financialRecord.status
  );
  const error = useSelector((state: RootState) => state.financialRecord.error);
  function onSubmit(values: FinancialRecordType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    dispatch(
      addRecord({
        ...values,
        userId: user?.id as string,
        amount: +values.amount,
      })
    );
    dispatch(
      addRecordState(
        {
          ...values,
          userId: user?.id as string,
          amount: +values.amount,
          createdAt:new Date()
        }
      )
    )

    form.reset();
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-3/4 mx-auto p-4"
      >
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
                <Input type="number" placeholder="nyxb" {...field} />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectItem value="">Select a category</SelectItem> */}

                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Rent">Rent</SelectItem>
                  <SelectItem value="Salary">Salary</SelectItem>
                  <SelectItem value="Utilities">Utilities</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectItem value="">Select a payment method</SelectItem> */}

                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="Cash">Cash</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={status === "loading"}>
          {status==='loading' ? <ReloadIcon className="mr-2 size-4 animate-spin" />: null}
        
          {status === "loading" ? "Adding" : "Add"}
        </Button>
      </form>
    </Form>
  );
};

export default FinancialRecordForm;

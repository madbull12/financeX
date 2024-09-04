"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "~/app/records/columns";
import { DataTable } from "~/app/records/data-table";
import { AppDispatch, RootState } from "~/store";
import { fetchRecords, setRecords } from "~/store/slices/financialRecord";
import { FinancialRecord } from "~/types/financial-record";

const FinancialRecordTable = ({ records }: { records: FinancialRecord[] }) => {
  console.log(records, "records");
  const dispatch = useDispatch<AppDispatch>();
  const recordSlice = useSelector(
    (state: RootState) => state.financialRecord
  );
  const { financialRecords:clientRecords} = recordSlice 
  useEffect(() => {
    dispatch(setRecords(records));
  }, [records]);
  return (
    <div className="w-3/4 mx-auto">
       <DataTable columns={columns} data={clientRecords} />
      
    </div>
  );
};

export default FinancialRecordTable;

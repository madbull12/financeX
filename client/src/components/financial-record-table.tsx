"use client"

import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { columns, FinancialRecord } from '~/app/records/columns'
import { DataTable } from '~/app/records/data-table'
import { AppDispatch, RootState } from '~/store'
import { fetchRecords } from '~/store/slices/financialRecord'

const FinancialRecordTable = ({ records }:{ records:FinancialRecord[] }) => {
    const financialRecords = useSelector((state: RootState) => state.financialRecord.financialRecords);
    console.log(financialRecords)
    const { user } = useUser();
    console.log(user?.id)

  return (
    // <DataTable columns={columns} data={financialRecords} />
    <></>
  )
}

export default FinancialRecordTable
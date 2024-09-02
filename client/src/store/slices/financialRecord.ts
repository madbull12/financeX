// store/features/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FinancialRecordState {
  description:string;
  amount:string;
  category:string;
  paymentMethod:string;
}

const initialState: FinancialRecordState = {
  description:"",
  amount:"",
  category:"",
  paymentMethod:""
};

const financialRecordSlice = createSlice({
  name: 'financialRecord',
  initialState,
  reducers: {
  
  },
});

export const {  } = financialRecordSlice.actions;

export default financialRecordSlice.reducer;

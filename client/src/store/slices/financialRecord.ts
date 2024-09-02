// store/features/counterSlice.ts
import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
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

export const addRecord = createAsyncThunk('financialRecord/addRecord',async()=>{
    await axios
})

const financialRecordSlice = createSlice({
  name: 'financialRecord',
  initialState,
  reducers: {
 
  },
  
  extraReducers:(builder)=>{
    builder
        .addCase()
  }
});

export const {  } = financialRecordSlice.actions;

export default financialRecordSlice.reducer;

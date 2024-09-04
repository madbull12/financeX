// store/features/counterSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { FinancialRecord } from '~/types/financial-record';
// interface FinancialRecordState {
//   _id?:string;
//     description: string;
//     amount: number;
//     category: string;
//     paymentMethod: string;
//     createdAt:Date,
//     userId?:string
// }
interface TransformFinancialRecordType {
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
    userId?:string
}

interface AddRecordState {
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
  userId?:string
}


interface InitialState {
    financialRecords: FinancialRecord[],
    addStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    fetchingStatus:'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: InitialState = {
    financialRecords: [],
    addStatus: 'idle',
    deleteStatus:"idle",
    fetchingStatus:"idle",
    error: null,
};

export const addRecord = createAsyncThunk('financialRecord/addRecord', async (record:TransformFinancialRecordType) => {
    await axios.post("http://localhost:5000/api/financial-records", record)
})
export const deleteRecord = createAsyncThunk('financialRecord/deleteRecord', async (recordId:string) => {
    await axios.delete(`http://localhost:5000/api/financial-records/${recordId}`)
})

export const fetchRecords = createAsyncThunk('financialRecord/fetchRecords', async (userId:string) => {
    const data = await axios.get(`http://localhost:5000/api/financial-records/${userId}`);
    return data.data
    
  });

const financialRecordSlice = createSlice({
    name: 'financialRecord',
    initialState,
    reducers: {
        setRecords:(state,action:PayloadAction<FinancialRecord[]>)=>{
            state.financialRecords = action.payload
        },
        addRecordState:(state,action:PayloadAction<FinancialRecord>) => {
          state.financialRecords.push(action.payload)
        },
        deleteRecordState:(state,action:PayloadAction<string>) => {
          state.financialRecords = state.financialRecords.filter((item)=>item._id !== action.payload)
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(addRecord.pending, (state) => {
            state.addStatus = 'loading';
            state.error = null;
          })
          .addCase(addRecord.fulfilled, (state) => {
            state.addStatus = 'succeeded';
          })
          .addCase(addRecord.rejected, (state, action) => {
            state.addStatus = 'failed';
            state.error = action.error.message || 'Failed to add record';
            state.financialRecords.pop()

          });
        builder
        .addCase(deleteRecord.pending, (state) => {
            state.deleteStatus = 'loading';
            state.error = null;
          })
          .addCase(deleteRecord.fulfilled, (state,action) => {
            state.deleteStatus = 'succeeded';
            state.financialRecords.filter((item)=>item._id !== action.payload);

            // state.financialRecords.filter((item)=>item.)
            // state.financialRecords.push(action.payload);
          })
          .addCase(deleteRecord.rejected, (state, action) => {
            state.deleteStatus = 'failed';
            state.error = action.error.message || 'Failed to add record';

          });

          builder
          .addCase(fetchRecords.pending, (state) => {
            state.fetchingStatus = 'loading';
            state.error = null;
          })
          .addCase(fetchRecords.fulfilled, (state, action: PayloadAction<FinancialRecord>) => {
            state.fetchingStatus = 'succeeded';
            state.financialRecords.push(action.payload);
          })
          .addCase(fetchRecords.rejected, (state, action) => {
            state.fetchingStatus = 'failed';
            state.error = action.error.message || 'Failed to fetch records';
          });
    }
});

export const { setRecords,addRecordState,deleteRecordState } = financialRecordSlice.actions;

export default financialRecordSlice.reducer;

// store/features/counterSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
interface FinancialRecordState {
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
    userId:string
}

interface InitialState {
    financialRecords: FinancialRecordState[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: InitialState = {
    financialRecords: [],
    status: 'idle',
    error: null,
};

export const addRecord = createAsyncThunk('financialRecord/addRecord', async (record: FinancialRecordState) => {
    await axios.post("http://localhost:5000/api/financial-records", record)
})

export const fetchRecords = createAsyncThunk('financialRecord/fetchRecords', async (userId:string) => {
    const data = await axios.get(`http://localhost:5000/api/financial-records/${userId}`);
    return data.data
    
  });

const financialRecordSlice = createSlice({
    name: 'financialRecord',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
        .addCase(addRecord.pending, (state) => {
            state.status = 'loading';
            state.error = null;
          })
          .addCase(addRecord.fulfilled, (state, action: PayloadAction<FinancialRecordState>) => {
            state.status = 'succeeded';
            state.financialRecords.push(action.payload);
          })
          .addCase(addRecord.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to add record';
            state.financialRecords.pop()

          });

          builder
          .addCase(fetchRecords.pending, (state) => {
            state.status = 'loading';
            state.error = null;
          })
          .addCase(fetchRecords.fulfilled, (state, action: PayloadAction<FinancialRecordState>) => {
            state.status = 'succeeded';
            state.financialRecords.push(action.payload);
          })
          .addCase(fetchRecords.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch records';
          });
    }
});

export const { } = financialRecordSlice.actions;

export default financialRecordSlice.reducer;

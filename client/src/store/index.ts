// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import financialRecordReducer from './slices/financialRecord';
const store = configureStore({
  reducer: {
    // Add your reducers here
    financialRecord:financialRecordReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

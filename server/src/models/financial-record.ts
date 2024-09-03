import mongoose from "mongoose";

interface FinancialRecord {
    userId: string;
    description: string;
    amount: number;
    category: string;
    createdAt:Date;
    paymentMethod: string;
}

const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
    userId: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt:{type: Date, default: Date.now},
    paymentMethod: { type: String, required: true }
});

const FinancialRecordModel = mongoose.model<FinancialRecord>("FinancialRecord", financialRecordSchema)

export default FinancialRecordModel;
export type FinancialRecord = {
    _id?: string;
    userId?:string
    description: string;
    amount: number;
    paymentMethod: string;
    createdAt: Date;
    category: string;
  };
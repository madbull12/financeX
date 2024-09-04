import React from "react";
import NumberTicker from "./ui/number-ticker";

const TotalExpenses = ({ amount }: { amount: number }) => {
  return (
    <div className="mt-4 font-bold justify-end flex text-xl">
     Total Expenses: $<NumberTicker value={amount} />
    </div>
  );
};

export default TotalExpenses;

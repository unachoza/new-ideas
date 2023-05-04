import { useState, useEffect } from "react";

export const useTransactions = (data) => {
  const [incomeTotal, setIncomeTotal] = useState(data);
  const [expenseTotal, setExpenseTotal] = useState(data);
  const [initialVisTransactions, setVisTransactions] = useState(data);
  const [lastI, setLastI] = useState(null);
  const [lastE, setLastE] = useState(null);

  useEffect(() => {
    let incomeSum = 0;
    let expenseSum = 0;
    const filteredIncome = data.filter(({ transaction }) => transaction === "Income");
    for (const tx of filteredIncome) {
      incomeSum += parseInt(tx.amount);
    }
    setIncomeTotal({ incomeSum });
    const filteredExpense = data.filter(({ transaction }) => transaction !== "Income");
    for (const tx of filteredExpense) {
      expenseSum += parseInt(tx.amount);
    }
    const getLast = (arr) => {
      return arr[arr.length - 1];
    };

    setExpenseTotal({ expenseSum });
    let lE = getLast(Object.values(filteredExpense));
    let lI = getLast(Object.values(filteredIncome));

    const percetentages = (sum, last) => {
      if (last) {
        return last.amount / sum;
      }
    };
    setLastE({ ...lE, transPercentage: percetentages(expenseSum, lE) });
    setLastI({ ...lI, transPercentage: percetentages(incomeSum, lI) });
    setVisTransactions(Object.values(data));
  }, [data]);
  return [incomeTotal, expenseTotal, initialVisTransactions, lastI, lastE];
};

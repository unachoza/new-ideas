import { createContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  const value = { transactions, setTransactions };

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>;
};

export default TransactionProvider;

import "./TransactionHistory.css";
import Button from "../../Components/UI/Button/Button";
import { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";

export default function TransactionHistory() {
  const { transactions, setTransactions } = useContext(TransactionContext);
  console.log("from history page", transactions);
  const mappedTransaction = transactions.map(({ transaction, category, amount, date }, i) => {
    return (
      <div
        className="single"
        style={transaction === "Income" ? { backgroundColor: "#a9e7a9" } : { backgroundColor: "#f4a0a0" }}
        key={i}
      >
        <h6>Transaction: {transaction}</h6>
        <h6>Category: {category}</h6>
        <h6>Amount: ${amount}</h6>
        <h6>{date}</h6>
      </div>
    );
  });
  return (
    <div className="content">
      <div className="heading">
        <div>List of Transactions</div>
        <Button text="Clear Transactions" onClick={() => setTransactions([])} size="0.7" />
      </div>

      <div>{mappedTransaction}</div>
    </div>
  );
}

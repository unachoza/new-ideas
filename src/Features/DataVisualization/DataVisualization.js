import "./DataVisualization.css";
import { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import Chart from "../../Components/Chart/Chart";

export default function DataVisualization() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  console.log("from vis page", { transactions });
  const calcIncomePercent = (currentTotal, newValue) => {
    const newValuePercent = newValue / currentTotal;
    console.log("P", { newValuePercent });
    return newValuePercent;
  };

  return (
    <>
      <Chart />
      <div>Center</div>
      <Chart />
    </>
  );
}

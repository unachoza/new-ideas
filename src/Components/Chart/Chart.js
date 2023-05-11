import {  useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import "./Chart.css";
import DonutD3 from './Donut/DonutD3'

const normalizeChartData = ({ category, amount }) => {
  return {
    // id: category,
    // percent: amount / 5,
    // color: `rgb(95, 133, ${amount})`,
    // label: category,
    // amount: amount,
    name: category, 
    value: amount
  };
};

export default function Chart() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  let donutsI = [];
  let donutsE = []
  transactions.forEach((trans) => {
    if (trans.transaction === "Income") {
    donutsI.push(normalizeChartData(trans));
    } else {
       donutsE.push(normalizeChartData(trans));
    }
  });
   if (donutsE) {
    return  <DonutD3 data={donutsE} width={300} height={400} />
    
  }
  return (
    <>
      <h6>No Data Yet</h6>
    </>
  );
}

// TODO

// 1. USE D3
//   - pie graph
//   - sequential chart
//   - hover to show transactions related to category

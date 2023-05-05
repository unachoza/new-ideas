import { useState, useRef, useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import Button from "../UI/Button/Button";
import Donut from "./Donut/Donut";
import "./Chart.css";

const normalizeChartData = ({ category, amount }) => {
  return {
    id: category,
    percent: amount / 5,
    color: `rgb(95, 133, ${amount})`,
    label: category,
    amount: amount,
  };
};

export default function Chart() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  let donuts = [];
  transactions.forEach((trans) => {
    donuts.push(normalizeChartData(trans));
  });

  const [data, setData] = useState(donuts);
  const svgRef = useRef();

  return (
    <>
      {data ? <Donut data={data} /> : <h6>No Data Yet</h6>}
      <br />
      <Button text="update" onClick={() => setData(data.map((value) => value * 2))} />
      <Button text="filter" onClick={() => setData(data.filter((value) => value > 10))} />
    </>
  );
}

// TODO

// 1. USE D3
//   - pie graph
//   - sequential chart
//   - hover to show transactions related to category

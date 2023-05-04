import "./Page1.css";
import "../Page.css";
import TransactionProvider from "../../Context/TransactionContext";
import TransactionHistory from "../../Features/TransactionHistory/TransactionHistory";
import Button from "../../Components/UI/Button/Button";
import Form from "../../Components/Form/Form";
import DataVisualization from "../../Features/DataVisualization/DataVisualization";

export default function Page1({ navigate }) {
  return (
    <TransactionProvider>
      <div className="page">
        <div className="">
          <p>Expenses & Budget</p>
        </div>
        <div className="body">
          {/* <Chart title="Income" /> */}
          <Form />
          {/* <Chart title="Expenses" /> */}
          <TransactionHistory />
        </div>
        <div className="footer">
          <div>The first page of what could very possibly be many pages. The Future is unknown.</div>
          <Button onClick={() => navigate("/")} text="Back to the Index" />
        </div>
      </div>
      <div className="page" id="charts-page">
        <DataVisualization />
      </div>
    </TransactionProvider>
  );
}

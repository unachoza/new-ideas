import "./Page1.css";
import "../Page.css";
import TransactionProvider from "../../Context/TransactionContext";
import TransactionHistory from "../../Features/TransactionHistory/TransactionHistory";
import Button from "../../Components/UI/Button/Button";
import Form from "../../Components/Form/Form";
import DataVisualization from "../../Features/DataVisualization/DataVisualization";
import Chart from "../../Components/Chart/Chart";

export default function Page1({ navigate }) {
  return (
    <TransactionProvider>
          <p className="title">Expenses & Budget</p>
      <div className="page">
        <div className="">
        </div>
        <div className="body">
          <Chart/>
        </div>
        <div className="body center">
          <Form />
          <TransactionHistory />
        </div>
         <div className="body">
          <Chart/>
        </div>
        
      {/* <div className="page" id="charts-page">
        <DataVisualization />
      </div> */}
        <div className="footer">
          <div>The first page of what could very possibly be many pages. The Future is unknown.</div>
          <Button onClick={() => navigate("/")} text="Back to the Index" />
        </div>
      </div>
    </TransactionProvider>
  );
}

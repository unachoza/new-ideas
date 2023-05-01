import "./Page1.css";
import "../Page.css";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";

export default function Page1({ navigate }) {
  return (
    <div className="page">
      <div className="">
        <p>Expenses & Budget</p>
      </div>
      <div className="body">
        {/* <Chart title="Income" /> */}
        <Form />
        {/* <Chart title="Expenses" /> */}
      </div>
      <div className="footer">
        <div>The first page of what could very possibly be many pages. The Future is unknown.</div>
        <Button onClick={() => navigate("/")} text="Back to the Index" />
      </div>
    </div>
  );
}

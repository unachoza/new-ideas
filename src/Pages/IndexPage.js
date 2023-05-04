import "./IndexPage.css";
import Button from "../Components/UI/Button/Button";

export default function IndexPage({ navigate }) {
  return (
    <div className="index-page">
      <Button onClick={() => navigate("/1")} text="Transaction Calculations" />
      <Button onClick={() => navigate("/2")} text="Budget Analysis" />
      <Button onClick={() => navigate("/3")} text="3" />
      <Button onClick={() => navigate("/4")} text="Appendix" />
    </div>
  );
}

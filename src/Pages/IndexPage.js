import "./IndexPage.css";
import Button from "../Components/Button/Button";

export default function IndexPage({ navigate }) {
  return (
    <div className="index-page">
      <Button onClick={() => navigate("/1")} text="Button for Page 1" />
      <button onClick={() => navigate("/1")}>Page1</button>
      <button onClick={() => navigate("/2")}>Page2</button>
      <button onClick={() => navigate("/3")}>Page3</button>
      <Button onClick={() => navigate("/4")} text="Appendix" />
    </div>
  );
}

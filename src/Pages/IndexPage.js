import "./IndexPage.css";

export default function IndexPage({ navigate }) {
  return (
    <div className="index-page">
      <button onClick={() => navigate("/1")}>Page1</button>
      <button onClick={() => navigate("/2")}>Page2</button>
      <button onClick={() => navigate("/3")}>Page3</button>
      <button onClick={() => navigate("/4")}>Page4</button>
    </div>
  );
}

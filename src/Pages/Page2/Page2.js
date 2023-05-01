import "./Page2.css";

export default function Page2({ navigate }) {
  return (
    <div className="page">
      <div>The Second Page</div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

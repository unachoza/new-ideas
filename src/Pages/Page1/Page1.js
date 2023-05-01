import "./Page1.css";
import "../Page.css";

export default function Page1({ navigate }) {
  return (
    <div className="page">
      <div>The first page of what could very possibly be many pages. The Future is unknown.</div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

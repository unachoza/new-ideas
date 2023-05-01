export default function Page2({ navigate }) {
  return (
    <div className="page">
      <div>The Forth Page. And the last page.</div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

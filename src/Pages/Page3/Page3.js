export default function Page2({ navigate }) {
  return (
    <div className="page">
      <div>The Third Page of the four pages</div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

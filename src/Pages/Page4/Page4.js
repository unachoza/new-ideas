export default function Page4({ navigate }) {
  return (
    <div className="page">
      <div className="content">
        <h2>New Hooks Used</h2>
        <ul>
          <li>useTransition</li>
          <p>
            Suspense and useTransition replace React.Router the previous way of routing to different pages in a
            non-Single Page Application (the most common implementationof React)
          </p>
        </ul>
        <h2>references</h2>
        <ul>
          <li>
            <a href="https://www.scalablepath.com/react/react-18-release-features">18 Updates</a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div>The Forth Page. And the last page.</div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}

import "./App.css";

export default function Layout({ children, isPending }) {
  return (
    <div className="layout">
      <section
        className="header"
        style={{
          opacity: isPending ? 0.7 : 1,
        }}
      >
        Projects using React v18{" "}
      </section>
      <main>{children}</main>
    </div>
  );
}

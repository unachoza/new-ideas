import "./Button.css";

export default function Button({ text, onClick, size }) {
  return (
    <button type="button" onClick={onClick} style={{ scale: size }}>
      {text}
    </button>
  );
}

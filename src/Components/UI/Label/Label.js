import "./Label.css";

export default function Label({ text }) {
  //switch statement to determine bar color
  return (
    <div>
      <div className="label">{text}</div>
      <div className="bar"></div>
    </div>
  );
}

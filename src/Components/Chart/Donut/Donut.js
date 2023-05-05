import { getSlicesWithCommandsAndOffsets } from "./DonutCalculations.ts";
import "./Donut.css";

export default function Donut({ data }) {
  let array;
  array = getSlicesWithCommandsAndOffsets(data).map(({ color, commands, offset, label, slice, amount }, i) => {
    return (
      <>
        <div>Look at me i'm a donut{label}</div>
        <svg viewBox="0 0 100 100">
          <path
            onClick={() => console.log(label, amount)}
            amount={amount}
            fill={color}
            stroke="blue"
            d={commands}
            transform={"rotate(" + offset + ")"}
          ></path>
        </svg>
      </>
    );
  });

  return <div>{array}</div>;
}

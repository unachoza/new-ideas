import { useMemo } from "react";
import * as d3 from "d3";

// type DataItem = {
//   name: string;
//   value: number;
// };
// type DonutChartProps = {
//   width: number;
//   height: number;
//   data: DataItem[];
// };

const MARGIN = 30;

// const colors = [
//   "#e0ac2b",
//   "#e85252",
//   "#6689c6",
//   "#9a6fb0",
//   "#a53253",
//   "#69b3a2",
// ];

const randomRed = () => {
	// let newRed = (Math.floor(Math.random() * 200))
	// const currentRed = "rgb(210, 43, 43)"
	let r; let g; let b; let c
	r = (Math.floor(Math.random() *30)) +200
	console.log(r)
	b = (Math.floor(Math.random() *30)) +200
	c = (Math.floor(Math.random() *30)) +200
	let rgbColor = `rbg(${r}, ${b}, ${c})`
	console.log(rgbColor)
	return rgbColor
}
const colors = [randomRed(), randomRed(), randomRed()]
console.log({colors})

export default function DonutChart({width, height, data}) {
    const radius = Math.min(width, height) / 2 - MARGIN;
  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 70,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
              {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
};

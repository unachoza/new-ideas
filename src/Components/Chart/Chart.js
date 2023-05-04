import { useState, useRef, useEffect } from "react";
import { select } from "d3";
import Button from "../UI/Button/Button";
import "./Chart.css";

export default function Chart(options, size) {
  const [data, setData] = useState([2, 5, 10]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 5)
      .attr("stroke", "blue")
      .attr("stroke-width", "4")
      .attr("fill", "none");
  }, [data]);
  return (
    <>
      <div className="content" style={{ scale: size }}>
        <svg ref={svgRef}></svg>
        <br />
        <Button text="update" onClick={() => setData(data.map((value) => value * 2))} />
        <Button text="filter" onClick={() => setData(data.filter((value) => value > 10))} />
      </div>
    </>
  );
}

// TODO

// 1. USE D3
//   - pie graph
//   - sequential chart
//   - hover to show transactions related to category

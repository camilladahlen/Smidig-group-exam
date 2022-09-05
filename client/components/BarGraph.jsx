import React from "react";
import "../css/BarGraph.css";
export function BarGraph({ percentage }) {
  return (
    <div className={"bar-graph block is-flex has-text-white mb-2"}>
      <div className={"bar-left is-flex-grow-1 has-text-left"}>
        {100 - percentage + "%"}
      </div>
      <div
        className={"bar-right has-text-right"}
        style={{ width: `${percentage}%` }}
      >
        {percentage + "%"}
      </div>
    </div>
  );
}

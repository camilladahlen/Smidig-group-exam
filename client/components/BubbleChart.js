import React, { useEffect, useRef } from "react";
import "../css/BubbleChart.css";
import D3Component from "./D3Component";

export function BubbleChart({ data, onClick }) {
  const d3Bubbles = useRef(); //Reference to the div element returned in this component

  //Initializing the D3Component in a useEffect to make sure it happens after the parent div is created
  useEffect(() => {
    new D3Component({ containerEl: d3Bubbles.current, data, onClick });
  }, [data]);

  return <div id="bubble-container" ref={d3Bubbles} />;
}

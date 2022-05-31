import React from "react";
import "../css/BarGraph.css";

const BarGraph = ({ element }) => {
  return (
    <div className={"column is-half"}>
      <div className={"Bar"}>{element}</div>
    </div>
  );
};

export default BarGraph;
/*
const testBar = (program, admin) => {
  document.getElementById("program").textContent = program + "%";
  document.getElementById("admin").textContent = admin + "%";

  return (
    <div className={"p-1 graph"}>
      <table className={"bar"} id={"my-chart"}>
        <tr>
          <td
            id={"program"}
            style={{
              width: program,
            }}
          >
            temp1
          </td>
          <td
            id={"admin"}
            style={{
              width: admin,
            }}
          >
            temp2
          </td>
        </tr>
      </table>
    </div>
  );
};

return (
  <div className={"container"}>
    <div className={"columns"}>
      <BarGraph element={testBar(70, 30)} />
    </div>
  </div>
);*/

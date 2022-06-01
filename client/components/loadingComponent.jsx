import React from "react";
export function LoadingComponent({ message = "Loading, please wait..." }) {
  return (
    <div
      className={
        "loading-component is-flex is-justify-content-center is-align-items-center"
      }
      style={{ height: "100vh" }}
    >
      <div>
        <span className={"fa-solid fa-spinner fa-spin-pulse"} />
        <p>{message}</p>
      </div>
    </div>
  );
}

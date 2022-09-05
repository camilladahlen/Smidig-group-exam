import React, { useState } from "react";
import bg from "../images/background.png";
import { Header } from "./Header";

export function PageComponent({ page, backgroundColor, userData }) {
  let style = {};
  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  } else {
    style.backgroundImage = "url(" + bg + ")";
    style.objectFit = "fill";
    style.backgroundRepeat = "repeat-y";
  }
  return (
    <>
      <Header
        data={userData}
        headerColor={backgroundColor ? "white" : "black"}
      />
      <div className={"pt-6 pb-6"} style={style}>
        <div className={"mt-6 pt-6"}>{page}</div>
      </div>
    </>
  );
}

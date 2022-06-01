import React, { useState } from "react";
import bg from "../images/background.png";
import { Header } from "./Header";

export function PageComponent({ page, backgroundColor, userData }) {
  let style = {};
  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  } else {
    style.backgroundImage = "url(" + bg + ")";
  }
  return (
    <>
      <Header
        data={userData}
        headerColor={backgroundColor ? "white" : "black"}
      />
      <div className={"pt-6"} style={style}>
        <div className={"pt-6"}>{page}</div>
      </div>
    </>
  );
}

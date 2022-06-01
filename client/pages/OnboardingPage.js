import { Route, Routes } from "react-router-dom";
import React from "react";
import { LoginCallback, Logout } from "./loginPage";
import { Tutorial } from "./Tutorial";
import { BubblePage } from "./BubblePage";

export function OnboardingPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route path={"/"} element={<Tutorial />} />
        <Route path={"/personalise"} element={<BubblePage />} />
      </Routes>
    </div>
  );
}

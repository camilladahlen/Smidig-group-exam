import { ArrowButton } from "../components/ArrowButtonComponent";
import { LogoComponent } from "../components/LogoComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Tutorial() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "100vh" }}
      className={"is-flex is-justify-content-center is-flex-direction-column"}
    >
      <div className={"has-text-white has-text-centered pb-6"}>
        <h1>Welcome!</h1>
        <p>
          First we’d like to know a bit more about what types of charities you
          value....
        </p>
      </div>
      <LogoComponent animate={animate} />
      <div
        style={{ zIndex: 8 }}
        className={"is-flex is-justify-content-center pt-6"}
      >
        <ArrowButton
          value={"Start personalisation"}
          onClick={() => {
            if (!animate) setAnimate(true);
            setTimeout(() => {
              navigate("/personalise");
            }, 3000);
          }}
        />
      </div>
    </div>
  );
}

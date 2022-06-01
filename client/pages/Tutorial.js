import { ArrowButton } from "../components/ArrowButtonComponent";
import { LogoComponent } from "../components/LogoComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleBtn } from "../components/GoogleBtnComponent";
import { LoginForm } from "../components/LoginFormComponent";

export function Tutorial() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  return (
    <section className={"section"}>
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
              navigate("/onboarding/personalise");
            }, 3000);
          }}
        />
      </div>
    </section>
  );
}

import { GoogleBtn } from "./GoogleBtnComponent";
import { useNavigate } from "react-router-dom";
import Logo from "../resources/MelioraLogo.png";
import { InputFieldInput } from "./InputField";
import { ArrowButton } from "./ArrowButtonComponent";
import { CardForm } from "./CardForm";

export function Divider({ message }) {
  const border = {
    borderBottom: "1px solid grey",
    transform: "translate(0px, -12px)",
  };
  return (
    <div className={"columns is-vcentered is-justify-content-center"}>
      <div className={"column is-5"} style={border} />
      <div className={"column is-narrow has-text-centered"}>{message}</div>
      <div className={"column is-5"} style={border} />
    </div>
  );
}

export function LoginForm() {
  const navigate = useNavigate();

  function formContents() {
    return (
      <>
        <div className={"is-flex is-justify-content-center"}>
          <figure className={"image is-128x128 mt-6"}>
            <img
              src={Logo}
              alt={"Meliora logo"}
              style={{ height: "fit-content" }}
            />
          </figure>
        </div>
        <div className={"card-content is-justify-content-center"}>
          <p className="is-size-2 is-family-secondary has-text-centered">
            Meliora Impact
          </p>
          <div className={"has-text-centered p-1"}>
            <p>Reimagining philantropic giving</p>
          </div>
          <div className={"is-flex is-justify-content-center p-5 mb-2"}>
            <GoogleBtn
              onClick={() => {
                document.cookie = `login_callback_url=${
                  window.location.pathname.includes("/matches")
                    ? "/onboarding"
                    : "/accountDetail"
                }; path=/`;
                navigate("/login/google");
              }}
            />
          </div>
          <Divider message={"or"} />
          <div className={"is-size-3 mb-2 mt-1"}>
            <InputFieldInput label={"E-mail"} placeholder={"E-mail"} />
            <InputFieldInput label={"Password"} placeholder={"Password"} />
          </div>
          <div className={"is-flex is-justify-content-center p-4"}>
            <ArrowButton
              value={"Continue"}
              onClick={() => navigate("../accountDetail")}
            />
          </div>
          <div className={"is-flex has-text-centered p-4"}>
            <p>
              By creating an account, you consent to our{" "}
              <a href={"#"} className={"is-underlined has-text-black"}>
                terms of agreement
              </a>{" "}
              and{" "}
              <a href={"#"} className={"is-underlined has-text-black"}>
                privacy policy
              </a>
            </p>
          </div>
          <div className={"has-text-centered p-4"}>
            <p>Already have an account?</p>
          </div>
          <div className={"has-text-centered p-4"}>
            <a href={"#"} className={"has-text-danger"}>
              Log in
            </a>
          </div>
        </div>
      </>
    );
  }

  return <CardForm contents={formContents()} />;
}

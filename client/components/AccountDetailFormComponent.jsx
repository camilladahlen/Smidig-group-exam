import { GoogleBtn } from "./GoogleBtnComponent";
import { useNavigate } from "react-router-dom";
import Logo from "../resources/MelioraLogo.png";
import { InputFieldInput } from "./InputField";
import { ArrowButton } from "./ArrowButtonComponent";

export function Divider() {
  const border = {
    borderBottom: "1px solid grey",
    transform: "translate(0px, -12px)",
  };
  return (
    <div className={"columns is-vcentered is-justify-content-center"}>
      <div className={"column is-11"} style={border} />
    </div>
  );
}

export function AccountDetailForm() {
  const navigate = useNavigate();
  return (
    <div className={"columns is-flex is-centered"}>
      <div className={"column is-8 is-narrow"}>
        <div className={"card"}>
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
            <div className={"has-text-centered p-1 mb-4"}>
              <p>Reimagining philantropic giving</p>
            </div>
            <Divider />
            <div className={"is-size-3"}>
              <InputFieldInput
                label={"Organisation name"}
                placeholder={"Name"}
              />
              <InputFieldInput
                label={"Organisation number"}
                placeholder={"Org. number"}
              />
              <InputFieldInput label={"Address"} placeholder={"Address"} />
              <InputFieldInput label={"Country"} placeholder={"Country"} />
              <div className="columns">
                <div className="column">
                  <InputFieldInput
                    label={"Postcode"}
                    placeholder={"Postcode"}
                  />
                </div>
                <div className="column mb-4">
                  <InputFieldInput label={"City"} placeholder={"City"} />
                </div>
              </div>
            </div>
            <div className={"is-flex is-justify-content-center p-4"}>
              <ArrowButton
                value={"Register now"}
                onClick={() => alert("Hello there")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

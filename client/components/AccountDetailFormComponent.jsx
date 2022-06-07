import Logo from "../resources/MelioraLogo.png";
import { InputFieldInput } from "./InputField";
import { ArrowButton } from "./ArrowButtonComponent";
import { CardForm } from "./CardForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const toastOptions = {
  position: "bottom-center",
  autoClose: 6000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

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

function FormContents() {
  const [orgName, setOrgName] = useState("");
  const [valOrgName, setValOrgName] = useState("");
  const [orgNum, setOrgNum] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (orgName && orgNum && address && country && postcode && city) {
      toast.error("Demo completed, thank you!", toastOptions);
    }
  };
  return (
    <div>
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
            value={orgName}
            setValue={setOrgName}
            required={true}
          />
          <InputFieldInput
            label={"Organisation number"}
            placeholder={"Org. number"}
            value={orgNum}
            setValue={setOrgNum}
          />
          <InputFieldInput
            label={"Address"}
            placeholder={"Address"}
            value={address}
            setValue={setAddress}
            required={true}
          />
          <InputFieldInput
            label={"Country"}
            placeholder={"Country"}
            value={country}
            setValue={setCountry}
            required={true}
          />
          <div className="columns">
            <div className="column">
              <InputFieldInput
                label={"Postcode"}
                placeholder={"Postcode"}
                value={postcode}
                setValue={setPostcode}
                required={true}
              />
            </div>
            <div className="column mb-4">
              <InputFieldInput
                label={"City"}
                placeholder={"City"}
                value={city}
                setValue={setCity}
                required={true}
              />
            </div>
          </div>
        </div>
        <div className={"is-flex is-justify-content-center p-4"}>
          <ArrowButton value={"Register now"} onClick={() => handleSubmit()} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export function AccountDetailForm() {
  return <CardForm contents={<FormContents />} />;
}

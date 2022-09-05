import React from "react";
import { InputFieldInput } from "../components/InputField";

export function InputField() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  return (
    <div>
      <div id={"input"}>
        <InputFieldInput
          label={"Name: "}
          placeholder={"Your name"}
          onValueChange={(input, setError, setColor) => {
            if (input === "1") {
              setError("ERROR!");
              setColor("is-danger");
            } else {
              setError("");
              setColor("");
            }
          }}
        />
      </div>
    </div>
  );
}

//https://mui.com/material-ui/react-text-field/ x

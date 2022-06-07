import React, { useState } from "react";

function checkEmptyField(val, setError, setColor) {
  if (val.length === 0) {
    setError("Field must not be blank");
    setColor("danger");
  } else {
    setError("");
  }
}

export function InputFieldInput({
  label,
  value,
  setValue,
  required = false,
  onValueChange = () => {},
  placeholder,
  disabled,
  type = "text",
}) {
  const [errorMsg, setErrorMsg] = useState("");
  const [color, setColor] = useState("");
  return (
    <div>
      <label className={"is-size-6 p-2"}>{label}</label>
      <input
        className={`input ${color}`}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          setValue(e.target.value);
          onValueChange(e.target.value, setErrorMsg, setColor);
          if (required) {
            checkEmptyField(e.target.value, setErrorMsg, setColor);
          }
        }}
      />
      {errorMsg && (
        <p className={"help has-text-danger"} id="errorMsg">
          {errorMsg}
        </p>
      )}
    </div>
  );
}

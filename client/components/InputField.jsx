import React, { useState } from "react";

export function InputFieldInput({
  label,
  value,
  onValueChange,
  placeholder,
  disabled,
  type = "text",
}) {
  const [errorMsg, setErrorMsg] = useState("");
  const [input, setInput] = useState("");
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
          setInput(e.target.value);
          onValueChange(e.target.value, setErrorMsg, setColor);
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

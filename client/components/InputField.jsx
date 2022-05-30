import React, { useState } from "react";

export function InputFieldInput({
  label,
  value,
  onValueChange,
  placeholder,
  disabled,
}) {
  const [errorMsg, setErrorMsg] = useState("");
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");
  return (
    <div>
      <label className={"label"}>{label}</label>
      <input
        className={`input ${color}`}
        type="text"
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

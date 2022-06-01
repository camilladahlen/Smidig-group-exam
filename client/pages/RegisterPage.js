import react from "react";
import { LoginForm } from "../components/LoginFormComponent";

export function RegisterPage() {
  return (
    <div className={"columns is-centered"}>
      <div className={"column is-7"}>
        <LoginForm />
      </div>
    </div>
  );
}

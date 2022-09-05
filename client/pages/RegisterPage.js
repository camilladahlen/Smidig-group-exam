import react from "react";
import { LoginForm } from "../components/LoginFormComponent";

export function RegisterPage() {
  window.scrollTo(0, 0);
  return (
    <div className={"columns is-centered"}>
      <div className={"column is-5"}>
        <LoginForm />
      </div>
    </div>
  );
}

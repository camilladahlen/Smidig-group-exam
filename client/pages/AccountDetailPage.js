import react from "react";
import { AccountDetailForm } from "../components/AccountDetailFormComponent";

export function AccountDetailPage() {
  window.scrollTo(0, 0);
  return (
    <div className={"columns is-centered"}>
      <div className={"column is-5"}>
        <AccountDetailForm />
      </div>
    </div>
  );
}

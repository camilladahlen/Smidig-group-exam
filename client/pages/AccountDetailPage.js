import react from "react";
import { AccountDetailForm } from "../components/AccountDetailFormComponent";

export function AccountDetailPage() {
  return (
    <div className={"columns is-centered"}>
      <div className={"column is-7"}>
        <AccountDetailForm />
      </div>
    </div>
  );
}

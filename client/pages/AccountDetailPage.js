import react from "react";
import { AccountDetailForm } from "../components/AccountDetailFormComponent";

export function AccountDetailPage() {
    return (
        <div className={"columns is-centered mb-6"}>
            <div className={"column is-7"}>
                <AccountDetailForm />
            </div>
        </div>
    );
}

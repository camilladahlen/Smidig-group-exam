import { PaymentCard } from "../components/PaymentCardComponent";
import { SubscriptionOptionsButton } from "../components/SubscriptionButtonComponent";

export function PaymentPlanPage() {
  return (
    <section className={"section"}>
      <div>
        <h1
          className={
            "title is-family-secondary is-size-1 has-text-white has-text-centered pb-6"
          }
        >
          Which payment plan is right for your organization?
        </h1>

        <div className={"container"}>
          <div className={"columns is-centered"}>
            <div className={"column is-narrow"}>
              <SubscriptionOptionsButton />
            </div>
          </div>

          <div className={"columns"}>
            <div className={"column is-one-third"}>
              <PaymentCard
                title={"Startup"}
                revenue={"less than xxx,- yearly revenue"}
                perks={["Perk 1", "Perk 2", "Perk 3"]}
              />
            </div>
            <div className={"column is-one-third"}>
              <PaymentCard
                title={"Small business"}
                revenue={"less than xxx,- yearly revenue"}
                perks={["Perk 1", "Perk 2", "Perk 3", "Perk 4"]}
              />
            </div>
            <div className={"column is-one-third"}>
              <PaymentCard
                title={"Large business"}
                revenue={"less than xxx,- yearly revenue"}
                perks={[
                  "Perk 1",
                  "Perk 2",
                  "Perk 3",
                  "Perk 4",
                  "Perk 5",
                  "Perk 6",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

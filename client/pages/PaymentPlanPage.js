import { PaymentCard } from "../components/PaymentCardComponent";
import { SubscriptionOptionsButton } from "../components/SubscriptionButtonComponent";

export function PaymentPlanPage() {
  const perks = [
    "Easily find non-profits reflecting your values",
    "Get updates regularly",
    "Overview of your company's impact",
    "Access to engaging reports and inside stories",
    "Direct communication with your non-profits",
    "Full control over donations",
    "Full statistic report",
  ];

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
                perks={[perks[0], perks[1], perks[2]]}
              />
            </div>
            <div className={"column is-one-third"}>
              <PaymentCard
                title={"Small business"}
                revenue={"less than xxx,- yearly revenue"}
                perks={[perks[0], perks[1], perks[2], perks[3], perks[4]]}
              />
            </div>
            <div className={"column is-one-third"}>
              <PaymentCard
                title={"Large business"}
                revenue={"less than xxx,- yearly revenue"}
                perks={[
                  perks[0],
                  perks[1],
                  perks[2],
                  perks[3],
                  perks[4],
                  perks[5],
                  perks[6],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SubscriptionOptionsButton() {
  return (
    <div className={"subscription-options-container"}>
      <input id={"monthly"} value={"HTML"} type={"radio"} name={"options"} />
      <label htmlFor={"monthly"}>Monthly</label>
      <input id={"quarterly"} value={"HTML"} type={"radio"} name={"options"} />
      <label htmlFor={"quarterly"}>Quarterly -5%</label>
      <input id={"yearly"} value={"HTML"} type={"radio"} name={"options"} />
      <label htmlFor={"yearly"}>Yearly -10%</label>
    </div>
  );
}

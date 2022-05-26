export function LogoComponent({ animate }) {
  const bubbleHelper = ({ wrapNum, translate }) => {
    let bubbles = [];
    for (let i = 0; i < 9; i++) {
      bubbles.push(<div className={"bubbles"} />);
    }
    return (
      <div
        className={"bubble-wrap " + wrapNum}
        style={{
          transform: translate,
        }}
      >
        {bubbles}
      </div>
    );
  };
  return (
    <div
      className={"stage is-flex is-justify-content-center"}
      style={{ height: "150px" }}
      id={"spinning-logo"}
    >
      <div id={"logo-container"} className={animate ? "animated" : ""}>
        {bubbleHelper({
          wrapNum: "wrap-one",
          translate: "translateX(0%) translateY(0%)",
        })}

        {bubbleHelper({
          wrapNum: "wrap-two",
          translate: "rotate(90deg) translateX(-18%) translateY(-105%)",
        })}

        {bubbleHelper({
          wrapNum: "wrap-three",
          translate: "rotate(-90deg) translateX(38%) translateY(-55%)",
        })}

        {bubbleHelper({
          wrapNum: "wrap-four",
          translate: "rotate(180deg) translateX(-20%) translateY(140%)",
        })}
      </div>
    </div>
  );
}

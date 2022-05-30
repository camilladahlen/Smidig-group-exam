export function ArrowButton({ value, onClick = () => {} }) {
  return (
    <div className={"arrowButton-container"}>
      <button
        type={"button"}
        className={"button-container"}
        onClick={() => {
          onClick();
        }}
      >
        {value}
      </button>
      <span className={"arrow-right"}>
        <i className="fa-solid fa-arrow-right" />
      </span>
    </div>
  );
}

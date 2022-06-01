import googleLogo from "../images/googleLogo.png";
export function GoogleBtn({ onClick = () => {} }) {
  return (
    <div>
      <button
        className="button is-light"
        onClick={() => {
          onClick();
        }}
      >
        <span className="icon">
          <img className="googleLogo" src={googleLogo} alt={"Google Logo"} />
        </span>
        <span>Continue with Google</span>
      </button>
    </div>
  );
}

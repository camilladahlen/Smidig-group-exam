import { useNavigate } from "react-router-dom";

export function HeaderButton({ isEmpty }) {
  const navigate = useNavigate();

  if (isEmpty) {
    return (
      <button
        onClick={() => {
          navigate("/login/google");
        }}
        className={"button is-black"}
      >
        Log in
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        navigate("/login/endsession");
      }}
      className={"button is-black"}
    >
      Log out
    </button>
  );
}

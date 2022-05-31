import { useNavigate } from "react-router-dom";
import { endSession } from "../library/apiMethods";

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
      onClick={async () => {
        await endSession();
      }}
      className={"button is-black"}
    >
      Log out
    </button>
  );
}

import { useNavigate } from "react-router-dom";

export function HeaderButton({ isEmpty }) {
  const navigate = useNavigate();

  function saveLocationAndNavigate(url) {
    document.cookie = `login_callback_url=${
      window.location.pathname.includes("/matches")
        ? "/onboarding"
        : window.location.pathname
    }; path=/`;
    navigate(url);
  }

  if (isEmpty) {
    return (
      <button
        onClick={() => {
          saveLocationAndNavigate("/login/google");
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
        saveLocationAndNavigate("/login/endsession");
      }}
      className={"button is-black"}
    >
      Log out
    </button>
  );
}

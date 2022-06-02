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
  const buttonStyle = {
    backgroundColor: "#2a293e",
    border: "none",
    borderRadius: 10,
    padding: "0 30px 0 30px",
  };

  if (isEmpty) {
    return (
      <button
        onClick={() => {
          saveLocationAndNavigate("/login/google");
        }}
        className={"button has-text-white"}
        style={buttonStyle}
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
      className={"button has-text-white"}
      style={buttonStyle}
    >
      Log out
    </button>
  );
}

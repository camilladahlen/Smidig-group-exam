import logo from "../resources/MelioraLogoEditWhite.png";
import { HeaderButton } from "./headerButtonComponent";
import "../css/header.css";
import { Link, useNavigate } from "react-router-dom";

export function Header({ data, headerColor }) {
  const NavbarItem = ({ textColor, label, onClick = () => {} }) => {
    return (
      <a
        onClick={() => onClick()}
        className={`navbar-item px-5 ${
          textColor === "white" ? "has-text-white" : "has-text-black"
        }`}
      >
        {label}
      </a>
    );
  };
  const navigate = useNavigate();
  const isEmpty = data.user && Object.keys(data.user).length === 0;

  return (
    <header className={"custom-header has-text-white"}>
      <nav
        className={"navbar is-spaced is-transparent"}
        role={"navigation"}
        aria-label={"main navigation"}
      >
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <img src={logo} alt={"Meliora Impact logo"} />
        </div>
        {!isEmpty && (
          <div className={"navbar-start"}>
            <NavbarItem
              textColor={headerColor}
              label={`Welcome ${data.user.google.name}`}
              to={""}
            />
          </div>
        )}
        <div
          className={`navbar-end ${
            headerColor === "white" ? "has-text-white" : "has-text-black"
          }`}
        >
          <NavbarItem
            textColor={headerColor}
            label={"Home"}
            onClick={() => navigate("/")}
          />
          <NavbarItem textColor={headerColor} label={"Our vision"} />
          <NavbarItem textColor={headerColor} label={"Join us"} />
          <NavbarItem textColor={headerColor} label={"Contact"} />
          <a className={"navbar-item px-5"}>
            <HeaderButton isEmpty={isEmpty} />
          </a>
        </div>
      </nav>
    </header>
  );
}

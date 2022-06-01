import logo from "../resources/MelioraLogoEditWhite.png";
import { HeaderButton } from "./headerButtonComponent";
import "../css/header.css";

export function Header({ data, headerColor }) {
  const NavbarItem = ({ textColor, label }) => {
    return (
      <a
        className={`navbar-item px-5 ${
          textColor === "white" ? "has-text-white" : "has-text-black"
        }`}
      >
        {label}
      </a>
    );
  };
  const isEmpty = Object.keys(data.user).length === 0;

  return (
    <header className={"custom-header has-text-white"}>
      <nav
        className={"navbar is-spaced is-transparent"}
        role={"navigation"}
        aria-label={"main navigation"}
      >
        <div className="navbar-brand">
          <img src={logo} alt={"Meloria Impact logo"} />
        </div>
        {!isEmpty && (
          <div className={"navbar-start"}>
            <a className={"navbar-item px-5"}>
              Welcome {data.user.google.name}
            </a>
          </div>
        )}
        <div
          className={`navbar-end ${
            headerColor === "white" ? "has-text-white" : "has-text-black"
          }`}
        >
          <NavbarItem textColor={headerColor} label={"Home"} />
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

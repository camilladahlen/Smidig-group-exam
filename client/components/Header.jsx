import logo from "../resources/MelioraLogoEditWhite.png";
import { HeaderButton } from "./headerButtonComponent";

export function Header() {
  return (
    <header>
      <nav
        className={"navbar is-spaced is-transparent "}
        role={"navigation"}
        aria-label={"main navigation"}
      >
        <div className="navbar-brand">
          <img src={logo} alt={"Meloria Impact logo"} />
        </div>
        <div className={"navbar-end"}>
          <a className={"navbar-item px-5"}>Home</a>
          <a className={"navbar-item px-5"}>Our vision</a>
          <a className={"navbar-item px-5"}>Join us</a>
          <a className={"navbar-item px-5"}>Contact</a>
          <a className={"navbar-item px-5"}>
            <HeaderButton value={"Sign up"} />
          </a>
        </div>
      </nav>
    </header>
  );
}

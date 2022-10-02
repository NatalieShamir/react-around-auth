import headerLogo from "../images/header.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__image"
        src={headerLogo}
        alt="The
project's title"
      />
    </header>
  );
}

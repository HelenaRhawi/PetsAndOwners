import Routes from "../Routes";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <h1>The Pet Shelter</h1>
      <nav>
        {Routes.filter((x) => x.label).map(({ path, label }) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

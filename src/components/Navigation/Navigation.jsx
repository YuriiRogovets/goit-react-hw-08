import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) => {
  return clsx(css.headerLink, {
    [css.active]: isActive,
  });
};

const Navigation = () => {
  return (
    <nav>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/contacts" end>
        Contacts
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/register" end>
        Register
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/login" end>
        Login
      </NavLink>
    </nav>
  );
};

export default Navigation;

import "../Header/Header.scss";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Typography variant="h5">VaporDeck</Typography>
      <nav>
        <NavLink activeClassName="active" exact to="/">
          Discover
        </NavLink>
        <NavLink activeClassName="active" to="/library">
          Library
        </NavLink>
      </nav>
    </header>
  );
};

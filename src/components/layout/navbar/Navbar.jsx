import "./Navbar.css";
import Cartwidget from "../../common/cartWidget/CartWidget.jsx";
import { AppBar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "peru", position: "static" }}>

        <ul className="lista">
          <li>
            <h2 className="logo">TIENDA SHHOP</h2>
          </li>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/products/women's clothing">Mujer</NavLink>
          <NavLink to="/products/jewelery">Accesorios</NavLink>
          <NavLink to="/products/men's clothing">Hombre</NavLink>
          <NavLink to="/products/electronics">Tecnología</NavLink>
          <li> <Cartwidget /></li>
        </ul>
      </AppBar>
    </Box>
  );
};

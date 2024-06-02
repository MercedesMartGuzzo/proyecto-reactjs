import "./Navbar.css";
import Cartwidget from "../../common/cartWidget/CartWidget.jsx";
import { AppBar, Box} from "@mui/material";


export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "peru", position: "static"}}>

        <ul className="lista">
          <li>
            <h2 className="logo">VIOLIN SHOP</h2>
          </li>
          <li><a href="">Intrumentos</a></li>
          <li><a href="">Cuerdas</a></li>
          <li><a href="">Accesorios</a></li>
          <li><a href="">Estuches</a></li>
         <li> <Cartwidget/></li>
        </ul>
      </AppBar>
    </Box>
  );
};
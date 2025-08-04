
import "./Navbar.css";
import Cartwidget from "../../common/cartWidget/CartWidget.jsx";
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    { label: "INICIO", path: "/" },
    { label: "MUJER", path: "/products/women's clothing" },
    { label: "ACCESORIOS", path: "/products/jewelery" },
    { label: "HOMBRE", path: "/products/men's clothing" },
    { label: "TECNOLOGÍA", path: "/products/electronics" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#7e3333" }}>
        <Toolbar
          className="toolbar"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {/* Logo */}
          <Typography variant="h6" component="div">
            <NavLink to="/" className="logo">
              TIENDA SHOP
            </NavLink>
          </Typography>

          {/* Ícono hamburguesa (mobile + tablet) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" },
              color: "peru",
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Enlaces y carrito (desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.path}>
                {item.label}
              </NavLink>
            ))}
            <Cartwidget />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Barra lateral mobile/tablet */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={NavLink}
                to={item.path}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem>
              <Cartwidget />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
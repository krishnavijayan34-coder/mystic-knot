import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box
} from "@mui/material";

import {
  Menu as MenuIcon,
  DarkMode,
  LightMode
} from "@mui/icons-material";

import {
  NavLink
} from "react-router-dom";

import { useState } from "react";

function Navbar({ mode, setMode }) {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (

    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor:
            mode === "dark"
              ? "#111"
              : "#ffffff",

          color:
            mode === "dark"
              ? "#ffffff"
              : "#111",

          boxShadow:
            "0 2px 10px rgba(0,0,0,0.15)"
        }}
      >

        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",

            px: {
              xs: 1,
              sm: 3,
              md: 6
            }
          }}
        >

          {/* LOGO */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start"
            }}
          >

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                letterSpacing: "1px",

                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem"
                }
              }}
            >
              Mystic Knots
            </Typography>

          </Box>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              flex: 1,

              display: {
                xs: "none",
                md: "flex"
              },

              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1
            }}
          >

            {menuItems.map((item) => (

              <Button
                key={item.name}

                component={NavLink}

                to={item.path}

                end={item.path === "/"}

                sx={{
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 500,

                  px: 2,
                  borderRadius: "8px",

                  transition: "0.3s",

                  color:
                    mode === "dark"
                      ? "#fff"
                      : "#111",

                  "&.active": {
                    backgroundColor: "#b08d57",
                    color: "#fff",

                    fontWeight: "bold",

                    transform: "scale(1.05)"
                  },

                  "&:hover": {
                    backgroundColor:
                      mode === "dark"
                        ? "#222"
                        : "#f2f2f2"
                  }
                }}
              >
                {item.name}
              </Button>

            ))}

            {/* THEME TOGGLE */}
            <IconButton
              onClick={() =>
                setMode(
                  mode === "dark"
                    ? "light"
                    : "dark"
                )
              }
              sx={{
                ml: 1,

                color:
                  mode === "dark"
                    ? "#fff"
                    : "#111"
              }}
            >

              {mode === "dark"
                ? <LightMode />
                : <DarkMode />}

            </IconButton>

          </Box>

          {/* MOBILE MENU */}
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none"
              }
            }}
          >

            <IconButton
              onClick={toggleDrawer}
              sx={{
                color:
                  mode === "dark"
                    ? "#fff"
                    : "#111"
              }}
            >
              <MenuIcon />
            </IconButton>

          </Box>

        </Toolbar>

      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
      >

        <Box
          sx={{
            width: 250,
            height: "100%",

            backgroundColor:
              mode === "dark"
                ? "#111"
                : "#fff",

            color:
              mode === "dark"
                ? "#fff"
                : "#111"
          }}
        >

          <Typography
            variant="h6"
            sx={{
              p: 2,
              fontWeight: "bold",

              borderBottom:
                mode === "dark"
                  ? "1px solid #333"
                  : "1px solid #ddd"
            }}
          >
            Mystic Knots
          </Typography>

          <List>

            {menuItems.map((item) => (

              <ListItem
                key={item.name}
                disablePadding
              >

                <ListItemButton
                  component={NavLink}
                  to={item.path}

                  end={item.path === "/"}

                  onClick={toggleDrawer}

                  sx={{
                    "&.active": {
                      backgroundColor: "#b08d57",
                      color: "#fff"
                    }
                  }}
                >

                  <ListItemText
                    primary={item.name}
                  />

                </ListItemButton>

              </ListItem>

            ))}

            {/* THEME MODE */}
            <ListItem disablePadding>

              <ListItemButton
                onClick={() =>
                  setMode(
                    mode === "dark"
                      ? "light"
                      : "dark"
                  )
                }
              >

                <ListItemText
                  primary={
                    mode === "dark"
                      ? "Light Mode"
                      : "Dark Mode"
                  }
                />

              </ListItemButton>

            </ListItem>

          </List>

        </Box>

      </Drawer>
    </>
  );
}

export default Navbar;
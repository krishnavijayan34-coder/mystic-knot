import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@mui/material";

import { Link } from "react-router-dom";

function Navbar() {
  return (

    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#111"
      }}
    >

      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold"
          }}
        >
          Mystic Knots
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/products"
        >
          Products
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/about"
        >
          About
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/contact"
        >
          Contact
        </Button>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;
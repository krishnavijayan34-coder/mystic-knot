import {
  Box,
  Typography,
  Button,
  Container
} from "@mui/material";

import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

function Home() {

  const darkMode =
    localStorage.getItem("theme") === "dark";

  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
          px: 2
        }}
      >

        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              darkMode
                ? "rgba(0,0,0,0.65)"
                : "rgba(0,0,0,0.45)"
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2
          }}
        >

          {/* MAIN TITLE */}
          <Typography
            sx={{
              fontWeight: "bold",
              letterSpacing: "3px",

              fontSize: {
                xs: "2.3rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem"
              },

              color: "#fff",

              textShadow:
                "2px 2px 10px rgba(0,0,0,0.7)"
            }}
          >
            Mystic Knots
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              mt: 2,
              opacity: 0.95,
              fontStyle: "italic",

              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.5rem"
              },

              color: "#f5f5f5",

              textShadow:
                "1px 1px 8px rgba(0,0,0,0.6)"
            }}
          >
            Handmade Gifts & Jewelry Crafted with Love
          </Typography>

          {/* BUTTON */}
          <Button
            variant="contained"
            component={Link}
            to="/products"
            sx={{
              mt: 4,
              backgroundColor: "#b08d57",

              px: 4,
              py: 1.5,

              fontSize: {
                xs: "14px",
                sm: "16px"
              },

              borderRadius: "30px",
              textTransform: "none",
              transition: "0.3s",

              "&:hover": {
                backgroundColor: "#8c6f3f",
                transform: "scale(1.05)"
              }
            }}
          >
            Explore Collection
          </Button>

        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          py: 3,
          textAlign: "center",
          backgroundColor:
            darkMode ? "#111" : "#f5f5f5",

          color:
            darkMode ? "#fff" : "#333"
        }}
      >
        <Typography variant="body2">
          © 2026 Mystic Knots
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            opacity: 0.8
          }}
        >
          Built by Krishna & Megha
        </Typography>
      </Box>

    </Box>
  );
}

export default Home;
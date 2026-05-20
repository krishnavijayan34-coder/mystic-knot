import {
  Box,
  Typography,
  Button,
  Container
} from "@mui/material";

import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

function Home() {

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

        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",

            top: 0,
            left: 0,

            width: "100%",
            height: "100%",

            background:
              "rgba(0,0,0,0.5)"
          }}
        />

        {/* CONTENT */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2
          }}
        >

          {/* TITLE */}
          <Typography
            sx={{
              fontWeight: "bold",
              letterSpacing: "3px",

              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem"
              },

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

              fontStyle: "italic",

              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.6rem"
              },

              opacity: 0.95,

              textShadow:
                "1px 1px 8px rgba(0,0,0,0.7)"
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

              borderRadius: "30px",

              textTransform: "none",

              fontSize: {
                xs: "14px",
                sm: "16px"
              },

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

    </Box>
  );
}

export default Home;
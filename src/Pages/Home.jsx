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
          height: "90vh",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "relative"
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
            backgroundColor: "rgba(0,0,0,0.45)"
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>

          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            Mystic-Knots
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            sx={{
              opacity: 0.9,
              fontStyle: "italic"
            }}
          >
            Handmade Gifts & Jewelry Crafted with Love
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/products"
            sx={{
              mt: 3,
              backgroundColor: "#b08d57",
              padding: "10px 25px",
              fontSize: "16px",
              borderRadius: "30px",
              textTransform: "none",
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
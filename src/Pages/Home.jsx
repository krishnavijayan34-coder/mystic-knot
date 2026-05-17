import {
  Box,
  Typography,
  Button,
  Container
} from "@mui/material";

import { Link } from "react-router-dom";

function Home() {
  return (

    <Box>

      {/* HERO SECTION */}

      <Box
        sx={{
          height: "90vh",

          backgroundImage:
            "url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f)",

          backgroundSize: "cover",
          backgroundPosition: "center",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          textAlign: "center",

          color: "white"
        }}
      >

        <Container>

          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold"
            }}
          >
            Mystic Knots
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
          >
            Handmade Gifts & Jewelry
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/products"

            sx={{
              mt: 3,

              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            Shop Now
          </Button>

        </Container>

      </Box>

    </Box>
  );
}

export default Home;
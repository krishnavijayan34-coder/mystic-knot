import {
  Container,
  Typography
} from "@mui/material";

function About() {
  return (

    <Container sx={{ mt: 5 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        About Us
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          lineHeight: 2
        }}
      >
        Mystic Knots is a handmade gift and jewelry brand
        started by Megha and Krishna with creativity,
        passion, and love.

        We create customized gifts, jewelry boxes,
        earrings, and unique handmade products designed
        to make special moments unforgettable.
      </Typography>

    </Container>
  );
}

export default About;
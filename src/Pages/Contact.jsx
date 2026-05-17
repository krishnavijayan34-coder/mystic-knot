import {
  Container,
  Typography
} from "@mui/material";

function Contact() {
  return (

    <Container sx={{ mt: 5 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Contact Us
      </Typography>

      <Typography sx={{ mt: 2 }}>
        WhatsApp: +91 XXXXX XXXXX
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Instagram: @mysticknot
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Email: mysticknot@gmail.com
      </Typography>

    </Container>
  );
}

export default Contact;
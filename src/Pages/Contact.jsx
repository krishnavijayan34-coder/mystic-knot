import {
  Container,
  Typography,
  Box,
  Button
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

      <Typography
        sx={{
          mt: 2,
          lineHeight: 2
        }}
      >
        We would love to hear from you.
        For orders, customized gifts, jewelry,
        and collaborations, contact us through
        Instagram.
      </Typography>

      <Box sx={{ mt: 4 }}>

        <Button
          variant="contained"
          href="https://www.instagram.com/myst.icknots/"
          target="_blank"

          sx={{

            "&:hover": {
              transform: "scale(1.05)"
            }
          }}
        >
          Contact on Instagram
        </Button>

      </Box>

      <Typography sx={{ mt: 4 }}>
        Instagram: @myst.icknots
      </Typography>

    </Container>
  );
}

export default Contact;
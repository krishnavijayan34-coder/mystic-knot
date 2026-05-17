import {
  Box,
  Typography
} from "@mui/material";

function Footer() {
  return (

    <Box
      sx={{
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        p: 3,
        mt: 5
      }}
    >

      <Typography variant="body1">
        © 2026 Mystic Knot
      </Typography>

      <Typography variant="body2">
        Built by Krishna & Megha
      </Typography>

    </Box>

  );
}

export default Footer;
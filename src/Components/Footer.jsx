import {
  Box,
  Typography
} from "@mui/material";

function Footer({ mode }) {

  return (

    <Box
      sx={{
        py: 3,
        textAlign: "center",

        backgroundColor:
          mode === "dark"
            ? "#111"
            : "#f5f5f5",

        color:
          mode === "dark"
            ? "#fff"
            : "#333"
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
  );
}

export default Footer;
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
            : "#333",

        borderTop:
          mode === "dark"
            ? "1px solid #222"
            : "1px solid #ddd"
      }}
    >

      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: "13px",
            sm: "14px"
          }
        }}
      >
        © 2026 Mystic Knots. All Rights Reserved.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          opacity: 0.8,

          fontSize: {
            xs: "12px",
            sm: "13px"
          }
        }}
      >
        Built by Krishna & Megha
      </Typography>

    </Box>
  );
}

export default Footer;
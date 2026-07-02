import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700 }}>
        404
      </Typography>

      <Typography variant="h6" color="text.secondary">
        Page not found
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </Box>
  );
}
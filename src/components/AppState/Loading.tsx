import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300,
        gap: 2,
        height: "100%",
      }}
    >
      <CircularProgress size={36} />

      <Typography variant="body2" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  );
}

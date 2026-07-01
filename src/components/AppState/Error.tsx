import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300,
        height: "100%",
      }}
    >
      <Alert
        severity="error"
        sx={{
          width: "100%",
          maxWidth: 500,
        }}
      >
        Something went wrong. Please try again.
      </Alert>
    </Box>
  );
};

export default Error;

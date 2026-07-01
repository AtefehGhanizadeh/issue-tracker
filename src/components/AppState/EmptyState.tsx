import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";

const EmptyState = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 300,
        gap: 2,
        textAlign: "center",
        height:'100%'
      }}
    >
      <InboxOutlinedIcon
        sx={{
          fontSize: 64,
          color: "text.disabled",
        }}
      />

      <Typography variant="h6">No issues found</Typography>

      <Typography variant="body2" color="text.secondary">
        Create your first issue to get started.
      </Typography>
    </Box>
  );
};

export default EmptyState;

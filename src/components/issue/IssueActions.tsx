import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function IssueActions() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <IconButton
        size="small"
        sx={{
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <EditOutlinedIcon fontSize="small" />
      </IconButton>

      <IconButton
        size="small"
        sx={{
          color: "error.main",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <DeleteOutlineOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

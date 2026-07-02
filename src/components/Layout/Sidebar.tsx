import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SidebarList from "./SidebarList";

export default function SideBar() {
  return (
    <Box
      sx={(theme) => ({
        width: 250,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.sidebar.bg,
        color: theme.palette.sidebar.text,
        padding: 2,
        borderRight:'1px solid',
        borderColor: "divider",
      })}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          color: theme.palette.sidebar.textActive,
          mb: 3,
          fontWeight: 600,
        })}
      >
        Issue Tracker
      </Typography>
      <SidebarList />
    </Box>
  );
}

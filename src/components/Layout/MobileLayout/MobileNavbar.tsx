import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DrawerMenu from "./DrawerMenu";

export default function MobileNavbar() {
  return (
    <Box
      sx={{
        height: 80,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <DrawerMenu />
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        Issue Tracker
      </Typography>

      <Avatar />
    </Box>
  );
}

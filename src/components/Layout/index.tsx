import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet } from "react-router-dom";
import MobileNavbar from "./MobileLayout/MobileNavbar";
import Sidebar from "./Sidebar";
import IssuesFiltersBar from "../issue/IssuesFiltersBar";

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {isMobile ? <MobileNavbar /> : <Sidebar />}
      {isMobile && <IssuesFiltersBar />}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              p: 3,
              height: "100%",
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

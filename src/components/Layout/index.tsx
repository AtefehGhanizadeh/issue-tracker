import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Sidebar from "./Sidebar";
import DesktopHeader from "./DesktopLayout/DesktopHeader";
import MobileHeader from "./MobileLayout/MobileHeader";
import MobileNavbar from "./MobileLayout/MobileNavbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function Layout() {
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({});

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

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isMobile ? (
          <MobileHeader {...headerConfig} />
        ) : (
          <DesktopHeader {...headerConfig} />
        )}

        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              p: 3,
            }}
          >
            <Outlet context={{ setHeaderConfig }} />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

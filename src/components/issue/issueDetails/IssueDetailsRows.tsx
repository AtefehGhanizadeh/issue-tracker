import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {
  label: string;
  value: React.ReactNode;
};

function IssueDetailsRows({ label, value }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        gap: 0.5,
      }}
    >
      <Typography variant="body2">{label}</Typography>

      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {value}
      </Typography>
    </Box>
  );
}

export default IssueDetailsRows;

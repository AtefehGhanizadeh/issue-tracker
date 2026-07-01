import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type Props =
  | {
      showSearch: true;
      showBack?: false;
    }
  | {
      showSearch?: false;
      showBack: true;
    };

export default function MobileHeader(props: Props) {
  return (
    <Box
      sx={{
        height: 80,
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      {props.showBack && (
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Back
        </Button>
      )}
      {props.showSearch && (
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Search
        </Button>
      )}
    </Box>
  );
}

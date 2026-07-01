import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

type Props =
  | {
      title: string;
      showBack?: false;
    }
  | {
      title?: never;
      showBack: true;
    };

export default function DesktopHeader(props: Props) {
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

      {props.title && (
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: "text.primary",
            ml: props.showBack ? 1 : 0,
          }}
        >
          {props.title}
        </Typography>
      )}
      <Avatar />
    </Box>
  );
}

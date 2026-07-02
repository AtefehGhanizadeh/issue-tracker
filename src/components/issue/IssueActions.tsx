import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";
import DeleteIssueDialog from "./DeleteIssueDialog";

type Props = {
  id: number;
  onDeleteSuccess?:()=>void ;
};

export default function IssueActions({ id, onDeleteSuccess }: Props) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/issues/${id}/edit`);
        }}
        sx={{
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <EditOutlinedIcon fontSize="small" />
      </IconButton>

      <DeleteIssueDialog onSuccess={onDeleteSuccess} id={id} />
    </Box>
  );
}

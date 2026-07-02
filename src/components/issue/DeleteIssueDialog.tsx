import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useDeleteIssue from "../../services/issue/hooks/useDeleteIssue";

type Props = {
  id: number;
  onSuccess?: () => void;
};

const DeleteIssueDialog = ({ id, onSuccess }: Props) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useDeleteIssue();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => onSuccess?.(),
    });

    setOpen(false);
  };

  return (
    <>
      <IconButton
        size="small"
        color="error"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        sx={{
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <DeleteOutlineOutlinedIcon fontSize="small" />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <WarningAmberRoundedIcon color="warning" />
            Delete Issue
          </Box>
        </DialogTitle>

        <DialogContent>
          <Typography variant="body2" color="text.secondary">
            Are you sure you want to delete this issue?
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            This action cannot be undone.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteIssueDialog;

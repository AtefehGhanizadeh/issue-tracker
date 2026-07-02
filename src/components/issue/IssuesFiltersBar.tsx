import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "../../app/store/issues/hooks";
import { setFilters, setPagination } from "../../app/store/issues/actions";
import { selectIssuesPagination } from "../../app/store/issues/selector";

import type { IssuePriority, IssueStatus } from "../../services/issue/type";

export default function IssuesFiltersBar() {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector(selectIssuesPagination);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleResetPage = () => {
    dispatch(setPagination({ page: 1, pageSize: pagination.pageSize }));
  };

  const commonSelectSx = {
    width: isMobile ? "70%" : 180,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",

        alignItems: "center",
        gap: 2,
        mb: 2,
      }}
    >
      <FormControl size="small" sx={commonSelectSx}>
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          defaultValue=""
          onChange={(e) => {
            dispatch(setFilters({ status: e.target.value as IssueStatus }));
            handleResetPage();
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={commonSelectSx}>
        <InputLabel>Priority</InputLabel>
        <Select
          label="Priority"
          defaultValue=""
          onChange={(e) => {
            dispatch(setFilters({ priority: e.target.value as IssuePriority }));
            handleResetPage();
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

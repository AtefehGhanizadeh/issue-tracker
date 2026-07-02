import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import type { ReactNode } from "react";
import * as React from "react";
import type {
  Issue,
  IssuePriority,
  IssueStatus,
} from "../../../services/issue/type";
import { formatDate } from "../../../utils/formatDate";
import CustomChip from "../CustomChip";
import IssueActions from "../IssueActions";
import { useNavigate } from "react-router-dom";

type Props = {
  issues: Issue[];
  count: number;
  page: number;
  pageSize: number;

  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

type Column = {
  id:
    | "title"
    | "status"
    | "priority"
    | "assignee"
    | "dueDate"
    | "createdAt"
    | "actions";
  label: string;
  minWidth?: number;
  render?: (value: Issue[keyof Issue], row: Issue) => ReactNode;
};

const columns: readonly Column[] = [
  { id: "title", label: "Title", minWidth: 170 },
  {
    id: "status",
    label: "Status",
    render: (value) => <CustomChip label={value as IssueStatus} />,
  },
  {
    id: "priority",
    label: "Priority",
    render: (value) => <CustomChip label={value as IssuePriority} />,
  },
  {
    id: "assignee",
    label: "Assignee",
  },
  {
    id: "createdAt",
    label: "Created At",
    render: (value) => formatDate(value as string),
  },
  {
    id: "dueDate",
    label: "Due Date",
  },
  {
    id: "actions",
    label: "Actions",
    render: (_, row) => <IssueActions id={row.id} />,
  },
];

export default function IssuesTable({
  issues,
  count,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) {
  const navigate = useNavigate();

  const issuesList = Array.isArray(issues) ? issues : [];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {issuesList.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={() => navigate(`/issues/${row.id}`)}
              >
                {columns.map((column) => {
                  const value =
                    column.id === "actions" ? undefined : row[column.id];

                  return (
                    <TableCell key={column.id}>
                      {column.render
                        ? column.render(value as Issue[keyof Issue], row)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={count}
        rowsPerPage={pageSize}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(e) => {
          onPageSizeChange(parseInt(e.target.value, 10));
          onPageChange(0);
        }}
      />
    </Paper>
  );
}

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

type Props = {
  issues: Issue[];
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
    minWidth: 100,
    render: (value) => <CustomChip label={value as IssueStatus} />,
  },
  {
    id: "priority",
    label: "Priority",
    minWidth: 170,
    render: (value) => <CustomChip label={value as IssuePriority} />,
  },
  {
    id: "assignee",
    label: "Asignee",
    minWidth: 170,
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 170,
    render: (value) => formatDate(value as string),
  },
  {
    id: "dueDate",
    label: "Due Date",
    minWidth: 170,
  },

  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    render: (value) => <IssueActions />,
  },
];

export default function IssuesTable({ issues }: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
          {issues && (
            <TableBody>
              {issues
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
                  );
                })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

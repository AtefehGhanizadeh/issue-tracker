import type { IssuePriority, IssueStatus } from "../../services/issue/type";

export type IssueFilters = {
  search: string;
  status: IssueStatus | "";
  priority: IssuePriority | "";
  assignee: string;
};

export type IssuePagination = {
  page: number;
  pageSize: number;
};

export type IssueSort = {
  field: "createdAt" | "dueDate";
  order: "asc" | "desc";
};

export type IssuesState = {
  filters: IssueFilters;
  pagination: IssuePagination;
  sort: IssueSort;
};

export type IssuesAction =
  | {
      type: "issues/setFilters";
      payload: Partial<IssuesState["filters"]>;
    }
  | {
      type: "issues/setPagination";
      payload: IssuesState["pagination"];
    }
  | {
      type: "issues/setSort";
      payload: IssuesState["sort"];
    }
  | {
      type: "issues/resetFilters";
    };

import type { Issue, IssuePriority, IssueStatus } from "./type";

export type GetIssuesParams = {
  page: number;
  pageSize: number;
  search?: string;
  status?: IssueStatus;
  priority?: IssuePriority;
  assignee?: string;
  sortBy?: "createdAt" | "dueDate";
  order?: "asc" | "desc";
};

export type PaginatedResponse<T> = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: T[];
};

export type IssuesResponse = PaginatedResponse<Issue>;

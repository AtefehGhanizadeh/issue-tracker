export const ISSUE_STATUSES = ["Open", "In Progress", "Done"] as const;

export type IssueStatus = (typeof ISSUE_STATUSES)[number];

export const ISSUE_PRIORITIES = ["Low", "Medium", "High", "Critical"] as const;

export type IssuePriority = (typeof ISSUE_PRIORITIES)[number];

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  assignee: string;
  dueDate: string;
  createdAt: string;
}

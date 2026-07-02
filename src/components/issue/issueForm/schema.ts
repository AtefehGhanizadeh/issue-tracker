import { z } from "zod";
import { ISSUE_PRIORITIES, ISSUE_STATUSES } from "../../../services/issue/type";

export const issueSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(3, "Description must be at least 3 characters"),

  status: z.enum(ISSUE_STATUSES, {
    message: "Please select a status",
  }),

  priority: z.enum(ISSUE_PRIORITIES, {
    message: "Please select a priority",
  }),

  assignee: z.string().min(1, "Please select an assignee"),

  dueDate: z.string().min(1, "Please select a due date"),
});

export type IssueFormType = z.infer<typeof issueSchema>;

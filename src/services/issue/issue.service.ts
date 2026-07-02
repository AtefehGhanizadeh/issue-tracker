import apiClient from "../../app/api";
import type { Issue, UpdateIssueDto } from "./type";
import type { GetIssuesParams, IssuesResponse } from "./query";

export async function getIssues(
  params: GetIssuesParams,
): Promise<IssuesResponse> {
  const { page, pageSize, status, priority, assignee } = params;

  const searchParams = new URLSearchParams();

  searchParams.set("_page", String(page));
  searchParams.set("_per_page", String(pageSize));

  if (status) {
    searchParams.set("status", status);
  }

  if (priority) {
    searchParams.set("priority", priority);
  }

  if (assignee) {
    searchParams.set("assignee", assignee);
  }

  const response = await apiClient.get<IssuesResponse>(
    `/issues?${searchParams.toString()}`,
  );

  return response.data;
}

export async function getIssueById(id: number): Promise<Issue> {
  const response = await apiClient.get<Issue>(`/issues/${id}`);
  return response.data;
}

export async function createIssue(issue: UpdateIssueDto): Promise<Issue> {
  const response = await apiClient.post<Issue>("/issues", issue);
  return response.data;
}

export async function updateIssue(
  id: number,
  issue: UpdateIssueDto,
): Promise<Issue> {
  const response = await apiClient.put<Issue>(`/issues/${id}`, issue);

  return response.data;
}

export async function deleteIssue(id: number): Promise<void> {
  await apiClient.delete(`/issues/${id}`);
}

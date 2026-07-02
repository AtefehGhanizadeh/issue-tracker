import apiClient from "../../app/api";
import type { Issue } from "./type";

export async function getIssues(): Promise<Issue[]> {
  const response = await apiClient.get<Issue[]>("/issues");
  return response.data;
}

export async function getIssueById(id: string): Promise<Issue> {
  const response = await apiClient.get<Issue>(`/issues/${id}`);
  return response.data;
}

export async function createIssue(issue: Issue): Promise<Issue> {
  const response = await apiClient.post<Issue>("/issues", issue);
  return response.data;
}

export async function updateIssue(
  id: string,
  issue: Issue,
): Promise<Issue> {
  const response = await apiClient.put<Issue>(`/issues/${id}`, issue);

  return response.data;
}

export async function deleteIssue(id: string): Promise<void> {
  await apiClient.delete(`/issues/${id}`);
}
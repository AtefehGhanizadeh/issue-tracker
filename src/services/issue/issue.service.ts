import apiClient from "../../app/api";
import type { Issue } from "./type";

export async function getIssues(): Promise<Issue[]> {
  const response = await apiClient.get<Issue[]>("/issues");
  return response.data;
}

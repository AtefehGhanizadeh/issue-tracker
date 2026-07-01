import { useQuery } from "@tanstack/react-query";
import { getIssueById } from "../issue.service";
import type { Issue } from "../type";

const useGetIssueById = (id: string) => {
  return useQuery<Issue>({
    queryKey: ["issue", id],
    queryFn: () => getIssueById(id),
    enabled: !!id,
  });
};

export default useGetIssueById;

import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../issue.service";
import type { Issue } from "../type";

const useGetIssues = () => {
  return useQuery<Issue[]>({
    queryKey: ["issues"],
    queryFn: getIssues,
  });
};

export default useGetIssues;

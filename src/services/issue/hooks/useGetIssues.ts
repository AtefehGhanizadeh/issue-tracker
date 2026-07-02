import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../issue.service";
import type { GetIssuesParams } from "../query";

const useGetIssues = (params: GetIssuesParams) => {
  return useQuery({
    queryKey: ["issues", params],
    queryFn: () => getIssues(params),
    placeholderData: (previousData) => previousData,
  });
};

export default useGetIssues;
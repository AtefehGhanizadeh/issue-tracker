import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIssue } from "../issue.service";
import type { Issue } from "../type";

const useEditIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, issue }: { id: string; issue: Issue }) =>
      updateIssue(id, issue),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });

      queryClient.invalidateQueries({
        queryKey: ["issue", variables.id],
      });
    },
  });
};

export default useEditIssue;

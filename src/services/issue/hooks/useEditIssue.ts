import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIssue } from "../issue.service";
import type { UpdateIssueDto } from "../type";

const useEditIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, issue }: { id: number; issue: UpdateIssueDto }) =>
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

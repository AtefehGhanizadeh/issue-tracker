import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteIssue } from "../issue.service";

const useDeleteIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteIssue(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });
    },
  });
};

export default useDeleteIssue;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createIssue } from "../issue.service";
import type { Issue } from "../type";
import { useNavigate } from "react-router-dom";

const useCreateIssue = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (issue: Issue) => createIssue(issue),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });
      navigate("/");
    },
  });
};

export default useCreateIssue;

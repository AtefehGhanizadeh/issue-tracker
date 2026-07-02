import { useParams } from "react-router-dom";

import AppState from "../../components/AppState/AppState";
import IssueForm from "../../components/issue/issueForm/IssueForm";

import useGetIssueById from "../../services/issue/hooks/useGetIssueById";
import type { IssueFormType } from "../../components/issue/issueForm/schema";
import useEditIssue from "../../services/issue/hooks/useEditIssue";

const EditIssuePage = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useGetIssueById(id!);
  const { mutate } = useEditIssue();

  const editIssue = (data: IssueFormType) => {
    mutate({
      id: Number(id),
      issue: data,
    });
  };
  if (isPending || isError || !data) {
    return (
      <AppState
        isLoading={isPending}
        error={error}
        empty={!data && !isPending && !isError}
      />
    );
  }

  return (
    <IssueForm
      defaultValues={data}
      onSubmit={editIssue}
      submitLabel="Save Changes"
    />
  );
};

export default EditIssuePage;

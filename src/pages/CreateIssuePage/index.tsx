import type { IssueFormType } from "../../components/issue/issueForm/schema";
import IssueForm from "../../components/issue/issueForm/IssueForm";
import useCreateIssue from "../../services/issue/hooks/useCreateIssue";

const CreateIssuePage = () => {
  const { mutate } = useCreateIssue();
  const createNewIssue = (data: IssueFormType) => {
    mutate(data);
  };

  return <IssueForm onSubmit={createNewIssue} submitLabel="Create New Issue" />;
};

export default CreateIssuePage;

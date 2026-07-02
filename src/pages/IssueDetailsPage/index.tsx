import { useParams } from "react-router-dom";
import useGetIssueById from "../../services/issue/hooks/useGetIssueById";
import IssueDetails from "../../components/issue/issueDetails/IssueDetails";
import AppState from "../../components/AppState/AppState";

export default function IssueDetailsPage() {
  const { id } = useParams();

  const { data, isError, isPending, error } = useGetIssueById(id!);

  if (isPending || isError || !data) {
    return <AppState isLoading={isPending} error={error} empty={!data} />;
  }

  if (data) {
    return <IssueDetails issue={data} />;
  }
}

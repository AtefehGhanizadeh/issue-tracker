import { useParams } from "react-router-dom";
import useGetIssueById from "../../services/issue/hooks/useGetIssueById";
import IssueDetails from "../../components/issue/issueDetails/IssueDetails";

export default function IssueDetailsPage() {
  const { id } = useParams();

  const { data } = useGetIssueById(id!);

  if (data) {
    return <IssueDetails issue={data} />;
  }
}

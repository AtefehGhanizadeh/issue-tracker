import Stack from "@mui/material/Stack";
import type { Issue } from "../../../services/issue/type";
import IssueCard from "./IssueCard";

type Props = {
  issues: Issue[];
};

export default function IssueCardList({ issues }: Props) {
  return (
    <Stack spacing={2}>
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </Stack>
  );
}

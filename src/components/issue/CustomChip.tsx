import Chip from "@mui/material/Chip";
import type { IssueStatus, IssuePriority } from "../../services/issue/type";
import { tokens } from "../../app/theme/tokens";

type Props = {
  label: IssueStatus | IssuePriority;
};

const mapColors = {
  Open: tokens.colors.status.open,
  "In Progress": tokens.colors.status.inProgress,
  Done: tokens.colors.status.done,

  Low: tokens.colors.priority.low,
  Medium: tokens.colors.priority.medium,
  High: tokens.colors.priority.high,
  Critical: tokens.colors.priority.critical,
} satisfies Record<
  IssueStatus | IssuePriority,
  {
    bg: string;
    text: string;
    border: string;
  }
>;
const CustomChip = ({ label }: Props) => {
  console.log(label);
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: mapColors[label].bg,
        color: mapColors[label].text,
        border: `1px solid ${mapColors[label].border}`,
      }}
    />
  );
};

export default CustomChip;

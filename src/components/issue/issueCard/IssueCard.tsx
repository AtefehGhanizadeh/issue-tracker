import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import type { Issue } from "../../../services/issue/type";
import CustomChip from "../CustomChip";
import IssueActions from "../IssueActions";
import { formatDate } from "../../../utils/formatDate";

type Props = {
  issue: Issue;
};

export default function IssueCard({ issue }: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
        transition: "0.2s",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: 2,
        },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {issue.title}
          </Typography>

          <Stack direction="row" spacing={1}>
            <CustomChip label={issue.status} />
            <CustomChip label={issue.priority} />
          </Stack>

          <Divider />

          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Assignee
              </Typography>

              <Typography variant="body2">{issue.assignee}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Due Date
              </Typography>

              <Typography variant="body2">
                {formatDate(issue.dueDate)}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Created
              </Typography>

              <Typography variant="body2">
                {formatDate(issue.createdAt)}
              </Typography>
            </Box>
          </Stack>

          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IssueActions />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

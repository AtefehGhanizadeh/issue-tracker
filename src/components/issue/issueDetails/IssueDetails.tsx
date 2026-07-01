import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { formatDate } from "../../../utils/formatDate";
import CustomChip from "../CustomChip";
import IssueActions from "../IssueActions";
import IssueDetailsRows from "./IssueDetailsRows";
import type { Issue } from "../../../services/issue/type";

type Props = {
  issue: Issue;
};

export default function IssueDetails({ issue }: Props) {
  return (
    <Container maxWidth="md">
      <Paper
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          p: { xs: 2, sm: 3 },
        }}
      >
        <Stack spacing={{ xs: 2, sm: 3 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "right",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              fontWeight: "700",
            }}
          >
            {issue.title}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            <CustomChip label={issue.status} />
            <CustomChip label={issue.priority} />
          </Stack>

          <Divider />

          <Stack spacing={2}>
            <IssueDetailsRows label="Assignee" value={issue.assignee} />

            <IssueDetailsRows
              label="Due Date"
              value={formatDate(issue.dueDate)}
            />

            <IssueDetailsRows
              label="Created At"
              value={formatDate(issue.createdAt)}
            />
          </Stack>

          <Divider />

          <Box>
            <Typography color="text.secondary" variant="body2" gutterBottom>
              Description
            </Typography>

            <Typography
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              {issue.description}
            </Typography>
          </Box>

          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            <IssueActions />
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}

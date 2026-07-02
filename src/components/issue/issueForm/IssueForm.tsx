import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema, type IssueFormType } from "./schema";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ISSUE_PRIORITIES, ISSUE_STATUSES } from "../../../services/issue/type";

type Props = {
  defaultValues?: IssueFormType;
  onSubmit: (data: IssueFormType) => void;
  submitLabel?: string;
};

const IssueForm = (props: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormType>({
    resolver: zodResolver(issueSchema),
    defaultValues: props.defaultValues,
  });

  console.log(props.defaultValues)

  return (
    <Paper
      component="form"
      elevation={0}
      onSubmit={handleSubmit(props.onSubmit)}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Stack spacing={3}>
        <TextField
          label="Title"
          fullWidth
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          minRows={4}
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          <Controller
            name="status"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl fullWidth error={!!fieldState.error}>
                <InputLabel>Status</InputLabel>

                <Select {...field} label="Status">
                  {ISSUE_STATUSES.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            name="priority"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl fullWidth error={!!fieldState.error}>
                <InputLabel>Priority</InputLabel>

                <Select {...field} label="Priority">
                  {ISSUE_PRIORITIES.map((priority) => (
                    <MenuItem key={priority} value={priority}>
                      {priority}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            name="assignee"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl fullWidth error={!!fieldState.error}>
                <InputLabel>Assignee</InputLabel>

                <Select {...field} label="Assignee">
                  <MenuItem value="Sara">Sara</MenuItem>
                  <MenuItem value="Ali">Ali</MenuItem>
                </Select>

                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </Box>

        <TextField
          type="date"
          label="Due Date"
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("dueDate")}
          error={!!errors.dueDate}
          helperText={errors.dueDate?.message}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" type="submit">
            Save Issue
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default IssueForm;

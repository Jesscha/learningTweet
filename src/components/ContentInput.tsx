import { Box, TextField } from "@mui/material";
import { DocumentNode } from "graphql";
import { useContentInput } from "./useContentInput";

interface ContentInputProps {
  label: string;
  refetchQueries?: DocumentNode[];
}

export default function ContentInput({
  label,
  refetchQueries,
}: ContentInputProps) {
  const { content, setContent, onSubmit } = useContentInput(refetchQueries);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e: any) => {
        onSubmit(e);
      }}
    >
      <TextField
        value={content}
        type={"text"}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        label={label}
        variant="outlined"
      />
    </Box>
  );
}

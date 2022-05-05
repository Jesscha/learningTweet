import { Box, TextField } from "@mui/material";
import { useContentInput } from "./useContentInput";

interface ContentInputProps {
  label: string;
}

export default function ContentInput({ label }: ContentInputProps) {
  const { content, setContent, onSubmit } = useContentInput();

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

import { CircularProgress, Paper } from "@mui/material";

export default function ContentArea({ data, loading }: any) {
  return (
    <Paper sx={{ width: "100%", padding: "24px" }}>
      {loading && <CircularProgress />}
      {data?.contentsByAuthor?.map(({ content, author }: any, i: any) => {
        return (
          <div key={content}>
            {content} <span> by {author}</span>
          </div>
        );
      })}
    </Paper>
  );
}

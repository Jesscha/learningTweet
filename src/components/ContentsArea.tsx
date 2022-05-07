import { gql, useQuery } from "@apollo/client";
import { CircularProgress, Paper } from "@mui/material";

const CONTENTS = gql`
  query {
    contents {
      content
      author
    }
  }
`;

export default function ContentArea() {
  const { data, loading } = useQuery(CONTENTS);

  return (
    <Paper sx={{ width: "100%" }}>
      {loading && <CircularProgress />}
      {data?.contents?.map(({ content, author }: any, i: any) => {
        return <div key={content}>{content}</div>;
      })}
    </Paper>
  );
}

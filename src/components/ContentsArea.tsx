import { useMemo } from "react";
import { CircularProgress, Paper } from "@mui/material";

export default function ContentArea({
  data,
  loading,
}: {
  data: any[];
  loading: boolean;
}) {
  const _data = useMemo(() => {
    if (!data || data.length < 1) {
      return data;
    }

    if (data[0].timestamp) {
      console.log(data);

      return data.slice().sort((prev, next) => prev.timestamp - next.timestamp);
    }

    return data;
  }, [data]);

  console.log(data);

  return (
    <Paper sx={{ width: "100%", padding: "24px" }}>
      {loading && <CircularProgress />}
      {_data?.map(({ content, author, timestamp }: any, i: any) => {
        return (
          <div key={i}>
            {content} <span> by {author}</span>
            {timestamp && timestamp}
          </div>
        );
      })}
    </Paper>
  );
}

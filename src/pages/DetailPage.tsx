import { gql, useQuery } from "@apollo/client";
import { Box, CircularProgress, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const CONTENTS_BY_ID = gql`
  query contentById($id: String) {
    contentById(id: $id) {
      content
      author
    }
  }
`;

export function DetailPage() {
  let { contentId } = useParams();

  console.log(contentId);

  const { data, loading } = useQuery(CONTENTS_BY_ID, {
    variables: { id: contentId },
  });

  console.log(data, loading);

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
        transition: " all 0.3s ease-out",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "360px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {loading && <CircularProgress />}
        {data && data.contentById.content}
      </Box>
    </Container>
  );
}

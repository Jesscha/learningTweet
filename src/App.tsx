/* eslint-disable max-len */
import { gql, useQuery } from "@apollo/client";
import { Box, Button, Container, Typography } from "@mui/material";
import ContentInput from "./components/ContentInput";
import ContentArea from "./components/ContentsArea";
import { useInitializeUser } from "./hooks/useInitializeUser";
import { useUser } from "./hooks/useUser";

const CONTENTS = gql`
  query {
    contents {
      content
      author
      timestamp
      id
    }
  }
`;

const CONTENTS_BY_AUTHOR = gql`
  query ContentsByAuthor($author: String) {
    contentsByAuthor(author: $author) {
      content
      author
      timestamp
      id
    }
  }
`;

function App() {
  useInitializeUser();

  const { user, logIn, logOut } = useUser();

  // const { data, loading } = useQuery(CONTENTS_BY_AUTHOR, {
  //   variables: { author: "CHA Jesse" },
  // });

  const { data, loading, error } = useQuery(CONTENTS);

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
        {user?.displayName}
        <Typography
          variant="h3"
          mb={1}
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          러닝 트윗! <br />
          짧은 생각을 모아봅시다.
        </Typography>
        <ContentArea data={data?.contents} loading={loading} />
        <Box
          sx={{
            marginTop: "16px",
          }}
        >
          {user ? (
            <ContentInput
              label="오늘의 배움"
              refetchQueries={[CONTENTS_BY_AUTHOR, CONTENTS]}
            />
          ) : (
            <div>로그인후 이용해 주세요</div>
          )}

          <Button
            onClick={() => {
              logIn();
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              logOut();
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
      <a href="metamask://wc:536e94ba-f45a-4400-9bb1-8682dac4817c@1?bridge=https%3A%2F%2Fv.bridge.walletconnect.org&key=8c44e9c600538f35a9c311c1d667ef9fa9d80b0e4eabc88f94f9455ed5fb2b66">
        제발
      </a>
    </Container>
  );
}

export default App;

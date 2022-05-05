import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useMutation,
  useQuery,
} from "@apollo/client";
import { Box } from "@mui/material";
import ContentInput from "./components/ContentInput";
import ContentArea from "./components/ContentsArea";

const client = new ApolloClient({
  uri: "https://us-central1-learningtweet-1dbfe.cloudfunctions.net/graphql",
  cache: new InMemoryCache(),
});

const CONTENTS = gql`
  query {
    contents {
      content
      author
    }
  }
`;

const ADD_CONTENT = gql`
  mutation AddContent($author: String, $content: String) {
    addContent(author: $author, content: $content) {
      content
      author
    }
  }
`;

function TestQuery() {
  const { data, loading } = useQuery(CONTENTS, { fetchPolicy: "no-cache" });
  const [addContent] = useMutation(ADD_CONTENT, {
    refetchQueries: [CONTENTS],
  });

  return (
    <>
      <button
        onClick={() => {
          addContent({ variables: { author: "appollo2", content: "222" } });
        }}
      >
        add content
      </button>
      {data?.contents?.map(({ content, author }: any, i: any) => {
        return (
          <div key={i}>
            {content} by {author}
          </div>
        );
      })}
    </>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
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
        <h1>
          러닝 트윗! <br />
          짧은 생각을 모아봅시다.
        </h1>
        <ContentArea />
        <Box
          sx={{
            "margin-top": "16px",
          }}
        >
          <ContentInput label="오늘의 배움" />
        </Box>
      </Box>
    </ApolloProvider>
  );
}

export default App;

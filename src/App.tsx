import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useMutation
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://us-central1-learningtweet-1dbfe.cloudfunctions.net/graphql",
  cache: new InMemoryCache()
});

const CONTENTS = gql`
 query {
   contents{
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

function TestQuery ( ){
  // const {data} = useQuery(CONTENTS, {fetchPolicy: "no-cache" });
  const [addContent, { data, error }] = useMutation(ADD_CONTENT,
    {
      refetchQueries: [
        { query: CONTENTS }
      ]
    });

  console.log(data)
  
  return <>
  <button onClick={()=>{
    addContent({variables : {author: "appollo2", content: "222"}});
  }}>
    add content
  </button>
  {data?.contents?.map(({content, author} : any, i :any)=>{

    return <div key={i}>
      {content} by {author}
    </div>

  })}
  </>
}

function App() {
  
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <h1>Welcome to learning tweet</h1>
      </div>
      <TestQuery/>

    </ApolloProvider>
   
  );
}



export default App;

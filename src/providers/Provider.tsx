import { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RecoilRoot } from "recoil";

const client = new ApolloClient({
  uri: "https://us-central1-learningtweet-1dbfe.cloudfunctions.net/graphql",
  cache: new InMemoryCache(),
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>{children}</ApolloProvider>;
    </RecoilRoot>
  );
}

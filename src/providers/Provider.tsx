import { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RecoilRoot } from "recoil";
import { useDarkMode } from "../hooks/useDarkMode";

const client = new ApolloClient({
  uri: "https://us-central1-learningtweet-1dbfe.cloudfunctions.net/graphql",
  cache: new InMemoryCache(),
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <MuiThemeProvider>
        <ApolloProvider client={client}>{children}</ApolloProvider>;
      </MuiThemeProvider>
    </RecoilRoot>
  );
}

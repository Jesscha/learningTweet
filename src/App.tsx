import "./App.css";
import { Box, Button } from "@mui/material";
import ContentInput from "./components/ContentInput";
import ContentArea from "./components/ContentsArea";
import { useInitializeUser } from "./hooks/useInitializeUser";
import { useUser } from "./hooks/useUser";

function App() {
  useInitializeUser();

  const { user, logIn, logOut } = useUser();

  return (
    <>
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
        <h1>
          러닝 트윗! <br />
          짧은 생각을 모아봅시다.
        </h1>
        <ContentArea />
        <Box
          sx={{
            marginTop: "16px",
          }}
        >
          {user ? (
            <ContentInput label="오늘의 배움" />
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
    </>
  );
}

export default App;

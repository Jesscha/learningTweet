import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../atoms/atom";
import { auth } from "../firebase";

export function useInitializeUser() {
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // https://github.com/firebase/firebase-js-sdk/issues/5722
      // according to issue recoil mutate user object. To fix this behavior I added stringify.
      setUser(JSON.parse(JSON.stringify(user)));
    });
  }, []);
}

import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/atom";
import { signInWithGoogle, signOutWithGoogle } from "../firebase";

export function useUser() {
  const user = useRecoilValue(userAtom);

  return {
    user,
    logIn: signInWithGoogle,
    logOut: signOutWithGoogle,
  };
}

import { atom } from "recoil";
import firebase from "../firebase";

export const userAtom = atom<firebase.User | null>({
  key: "userAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const isDarkModeAtom = atom<boolean>({
  key: "isDarkMode",
  default: false,
});

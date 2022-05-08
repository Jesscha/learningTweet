import { useRecoilState } from "recoil";
import { isDarkModeAtom } from "../atoms/atom";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeAtom);

  return { isDarkMode, setIsDarkMode };
}

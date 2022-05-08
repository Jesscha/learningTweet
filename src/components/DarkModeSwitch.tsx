import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeSwitch() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={handleChange} />}
        label="DarkMode"
      />
    </FormGroup>
  );
}

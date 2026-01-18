import { Box } from "@mui/material";
import { ModeSwitcher } from "../scheduler/ModeSwitcher";
import { TimeInputContainer } from "../scheduler/TimeInputContainer/TimeInputContainer";

export const MainContainer = () => {
  return (
    <Box>
      <ModeSwitcher />
      <TimeInputContainer />
    </Box>
  );
}
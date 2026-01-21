import { Box } from "@mui/material";
import { TimeInputContainer } from "../scheduler/TimeInputContainer/TimeInputContainer";
import { useState } from "react";
import { Mode, Time } from "../../types/types";
import { ModeSwitcher } from "../scheduler/ModeSwitcher";

export const MainContainer = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 30 });

  const updateTime = (newTime: Time) => {
    setTime(newTime);
  }

  return (
    <Box>
      <ModeSwitcher mode={mode} onModeChange={setMode} />
      <TimeInputContainer
        time={time}
        onTimeChange={updateTime}
      />
    </Box>
  );
};

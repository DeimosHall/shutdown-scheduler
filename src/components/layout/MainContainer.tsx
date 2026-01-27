import { Box } from "@mui/material";
import { useState } from "react";
import { Action, Mode, Time } from "../../types/types";
import { ModeSwitcher } from "../scheduler/ModeSwitcher";
import { TimeInputContainer } from "../scheduler/TimeInputContainer/TimeInputContainer";
import { ActionSelector } from "../scheduler/ActionSelector";

export const MainContainer = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 30 });
  const [action, setAction] = useState<Action>("SHUTDOWN");

  const updateTime = (newTime: Time) => {
    setTime(newTime);
  };

  return (
    <Box>
      <ModeSwitcher mode={mode} onModeChange={setMode} />
      <TimeInputContainer time={time} onTimeChange={updateTime} mode={mode} />
      <ActionSelector action={action} onActionChange={setAction} />
    </Box>
  );
};

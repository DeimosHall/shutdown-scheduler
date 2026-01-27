import { Box } from "@mui/material";
import { useState } from "react";
import { Action, Mode, Time } from "../../types/types";
import { ModeSwitcher } from "../scheduler/ModeSwitcher";
import { TimeInputContainer } from "../scheduler/TimeInputContainer/TimeInputContainer";
import { ActionSelector } from "../scheduler/ActionSelector";
import { ActionButtons } from "../scheduler/ActionButtons";

export const MainContainer = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 30 });
  const [action, setAction] = useState<Action>("SHUTDOWN");
  const [started, setStarted] = useState<Boolean>(false);

  const updateTime = (newTime: Time) => {
    setTime(newTime);
  };

  const updateAction = (newAction: Action) => {
    setStarted(false);
    setAction(newAction);
  };

  return (
    <Box>
      <ModeSwitcher mode={mode} onModeChange={setMode} />
      <TimeInputContainer
        onTimeChange={updateTime}
        mode={mode}
        disabled={started}
      />
      <ActionSelector action={action} onActionChange={updateAction} />
      <ActionButtons started={started} onStartedChange={setStarted} />
    </Box>
  );
};

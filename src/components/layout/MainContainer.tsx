import { Box } from "@mui/material";
import { useState } from "react";
import { Action, Mode, Time } from "../../types/types";
import { ModeSwitcher } from "../scheduler/ModeSwitcher";
import { TimeInputContainer } from "../scheduler/TimeInputContainer/TimeInputContainer";
import { ActionSelector } from "../scheduler/ActionSelector";
import { ActionButtons } from "../scheduler/ActionButtons";
import { invoke } from "@tauri-apps/api/core";

export const MainContainer = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 30 });
  const [action, setAction] = useState<Action>("SHUTDOWN");
  const [started, setStarted] = useState<boolean>(false);

  const updateTime = (newTime: Time) => {
    setTime(newTime);
  };

  const onStartedChange = async (newStarted: boolean) => {
    setStarted(newStarted);

    if (!newStarted) {
      try {
        const success = await invoke("cancel");
        if (!success) {
          alert("Something went wrong canceling the request");
        }
      } catch (error) {
        alert(`Something went wrong: ${error}`);
      }
    }

    if (newStarted) {
      try {
        switch (action) {
          case "SHUTDOWN": {
            const success = await invoke("shutdown", { time: time });
            if (!success) {
              alert("Something went wrong while scheduling the shutdown");
            }
            break;
          }
          case "RESTART": {
            const success = await invoke("reboot", { time: time });
            if (!success) {
              alert("Something went wrong while scheduling the restart");
            }
            break;
          }
        }
      } catch (error) {
        alert(`Something went wrong: ${error}`);
      }
    }
  };

  const updateAction = (newAction: Action) => {
    onStartedChange(false);
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
      <ActionButtons started={started} onStartedChange={onStartedChange} />
    </Box>
  );
};

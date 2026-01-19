import { Box } from "@mui/material";
import { TimeInputContainer } from "../scheduler/TimeInputContainer/TimeInputContainer";
import { ChangeEvent, useState } from "react";
import { Mode } from "../../types/types";
import { ModeSwitcher } from "../scheduler/ModeSwitcher";

export const MainContainer = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const is_input_valid = (input: string): Boolean => {
    const value = input.trim();

    if (isNaN(Number(value))) {
      return false;
    }

    if (value.length > 2) {
      return false;
    }

    return true;
  };

  const is_hours_valid = (hour: string): Boolean => {
    return Number(hour) >= 0 && Number(hour) <= 23;
  };

  const is_minutes_valid = (minutes: string): Boolean => {
    return Number(minutes) >= 0 && Number(minutes) <= 59;
  };

  const updateHours = (e: ChangeEvent<HTMLInputElement>) => {
    const hours = e.target.value;

    if (!is_input_valid(hours)) {
      return;
    }

    if (!is_hours_valid(hours)) {
      return;
    }

    setHours(hours);
  };

  const updateMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    const minutes = e.target.value;

    if (!is_input_valid(minutes)) {
      return;
    }

    if (!is_minutes_valid(minutes)) {
      return;
    }

    setMinutes(minutes);
  };

  return (
    <Box>
      <ModeSwitcher mode={mode} onModeChange={setMode} />
      <TimeInputContainer
        hours={hours}
        onHoursChange={updateHours}
        minutes={minutes}
        onMinutesChange={updateMinutes}
      />
    </Box>
  );
};

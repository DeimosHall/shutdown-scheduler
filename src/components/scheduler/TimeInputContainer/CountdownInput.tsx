import { Box } from "@mui/material";
import { Time } from "../../../types/types";
import { TimeInput } from "./TimeInput";
import { ChangeEvent } from "react";
import {
  COUNTDOWN_MODE_MAX_HOURS,
  COUNTDOWN_MODE_MAX_MINUTES,
  COUNTDOWN_MODE_MIN_HOURS,
  COUNTDOWN_MODE_MIN_MINUTES,
  is_number_in_range,
} from "../../../utils/validators";

interface CountdownInputProps {
  time: Time;
  onTimeChange: (newTime: Time) => void;
}

export function CountdownInput({ time, onTimeChange }: CountdownInputProps) {
  const onHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hours = e.target.value;

    if (
      !is_number_in_range(
        hours,
        COUNTDOWN_MODE_MIN_HOURS,
        COUNTDOWN_MODE_MAX_HOURS,
      )
    ) {
      return;
    }

    onTimeChange({ hours: Number(hours), minutes: time.minutes });
  };

  const onMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const minutes = e.target.value;

    if (
      !is_number_in_range(
        minutes,
        COUNTDOWN_MODE_MIN_MINUTES,
        COUNTDOWN_MODE_MAX_MINUTES,
      )
    ) {
      return;
    }

    onTimeChange({ hours: time.hours, minutes: Number(minutes) });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "5%",
        gap: "30px",
      }}
    >
      <TimeInput value={time.hours} onChange={onHoursChange} />
      <TimeInput value={time.minutes} onChange={onMinutesChange} />
    </Box>
  );
}

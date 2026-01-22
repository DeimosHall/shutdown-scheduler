import { Box } from "@mui/material";
import { TimeInput } from "./TimeInput";
import { Time } from "../../../types/types";
import { ChangeEvent } from "react";

interface ClockInputProps {
  time: Time;
  onTimeChange: (newTime: Time) => void;
}

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

export const ClockInput = ({
  time,
  onTimeChange,
}: ClockInputProps) => {
  const onHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hours = e.target.value;

    if (!is_input_valid(hours) || !is_hours_valid(hours)) {
      return;
    }

    onTimeChange({ hours: Number(hours), minutes: time.minutes });
  };

  const onMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const minutes = e.target.value;

    if (!is_input_valid(minutes) || !is_minutes_valid(minutes)) {
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
};

import { Box } from "@mui/material";
import { TimeInput } from "./TimeInput";
import { Time } from "../../../types/types";
import { ChangeEvent } from "react";
import {
  CLOCK_MODE_MAX_HOURS,
  CLOCK_MODE_MAX_MINUTES,
  CLOCK_MODE_MIN_HOURS,
  CLOCK_MODE_MIN_MINUTES,
  is_number_in_range,
} from "../../../utils/validators";

interface ClockInputProps {
  time: Time;
  onTimeChange: (newTime: Time) => void;
  disabled: Boolean;
}

export const ClockInput = ({
  time,
  onTimeChange,
  disabled,
}: ClockInputProps) => {
  const onHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hours = e.target.value;

    if (
      !is_number_in_range(hours, CLOCK_MODE_MIN_HOURS, CLOCK_MODE_MAX_HOURS)
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
        CLOCK_MODE_MIN_MINUTES,
        CLOCK_MODE_MAX_MINUTES,
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
      <TimeInput
        value={time.hours}
        onChange={onHoursChange}
        disabled={disabled}
      />
      <TimeInput
        value={time.minutes}
        onChange={onMinutesChange}
        disabled={disabled}
      />
    </Box>
  );
};

import { Box } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import TimeInput from "./TimeInput";

interface TimeInputContainerProps {
  hours: string;
  onHoursChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  minutes: string;
  onMinutesChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}

export const TimeInputContainer = ({
  hours,
  onHoursChange,
  minutes,
  onMinutesChange,
}: TimeInputContainerProps) => {
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
      <TimeInput value={hours} onChange={onHoursChange} />
      <TimeInput value={minutes} onChange={onMinutesChange} />
    </Box>
  );
};

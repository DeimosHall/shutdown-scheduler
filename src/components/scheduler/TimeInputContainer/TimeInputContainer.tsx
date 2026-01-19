import { Box } from "@mui/material";
import { ChangeEvent, useState } from "react";
import TimeInput from "./TimeInput";

export const TimeInputContainer = () => {
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
  }
  
  const is_hours_valid = (hour: string): Boolean => {
    return Number(hour) >= 0 && Number(hour) <= 23;
  }
  
  const is_minutes_valid = (minutes: string): Boolean => {
    return Number(minutes) >= 0 && Number(minutes) <= 59;
  }
  
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
      <TimeInput value={hours} onChange={updateHours} />
      <TimeInput value={minutes} onChange={updateMinutes} />
    </Box>
  );
};
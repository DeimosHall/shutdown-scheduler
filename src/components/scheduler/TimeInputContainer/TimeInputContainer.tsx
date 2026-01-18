import { Box } from "@mui/material";
import { ChangeEvent, useState } from "react";
import TimeInput from "./TimeInput";

export const TimeInputContainer = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const is_input_valid = (input: string): Boolean => {
    const value = input.trim();
    
    if (!isNaN(Number(value))) {
      return false;
    }
    
    return true;
  }
  
  const updateHours = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!is_input_valid(value)) {
      return;
    }
    
    setHours(value);
  };

  const updateMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value);
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
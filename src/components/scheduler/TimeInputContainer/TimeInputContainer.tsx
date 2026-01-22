import { useState } from "react";
import { Mode, Time } from "../../../types/types";
import { ClockInput } from "./ClockInput";
import { CountdownInput } from "./CountdownInput";

interface TimeInputContainerProps {
  time: Time;
  onTimeChange: (newTime: Time) => void;
  mode: Mode;
}

interface TimeValue {
  clockTime: Time;
  countdownTime: Time;
}

export function TimeInputContainer({
  time,
  onTimeChange,
  mode,
}: TimeInputContainerProps) {
  const [timeValue, setTimeValue] = useState<TimeValue>({
    clockTime: {
      hours: 0,
      minutes: 0,
    },
    countdownTime: {
      hours: 0,
      minutes: 30,
    },
  });

  const updateTimeValue = (newTime: Time) => {
    switch (mode) {
      case "COUNTDOWN": {
        setTimeValue((prev) => ({
          ...prev,
          countdownTime: newTime,
        }));
        onTimeChange(newTime);
        break;
      }
      case "CLOCK": {
        setTimeValue((prev) => ({
          ...prev,
          clockTime: newTime,
        }));
        onTimeChange(newTime);
        break;
      }
      default: {
        alert("This should never happen!");
      }
    }
  };

  return (
    <>
      {mode === "COUNTDOWN" ? (
        <CountdownInput
          time={timeValue.countdownTime}
          onTimeChange={updateTimeValue}
        />
      ) : (
        <ClockInput time={timeValue.clockTime} onTimeChange={updateTimeValue} />
      )}
    </>
  );
}

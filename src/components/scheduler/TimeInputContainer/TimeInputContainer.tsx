import { Mode, Time } from "../../../types/types";
import { ClockInput } from "./ClockInput";
import { CountdownInput } from "./CountdownInput";

interface TimeInputContainerProps {
  time: Time;
  onTimeChange: (newTime: Time) => void;
  mode: Mode;
}

export function TimeInputContainer({
  time,
  onTimeChange,
  mode,
}: TimeInputContainerProps) {
  return (
    <>
      {mode === "COUNTDOWN" ? (
        <CountdownInput time={time} onTimeChange={onTimeChange} />
      ) : (
        <ClockInput time={time} onTimeChange={onTimeChange} />
      )}
    </>
  );
}

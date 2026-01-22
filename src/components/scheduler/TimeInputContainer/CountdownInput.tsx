import { Time } from "../../../types/types";

interface CountdownInputProps {
  time: Time;
  onTimeChange: (newTime: Time) => void;
}

export function CountdownInput({ time, onTimeChange }: CountdownInputProps) {
  return (
    <p>Pending implementation...</p>
  );
}
export type Mode = "COUNTDOWN" | "CLOCK";

export type Action = "SHUTDOWN" | "RESTART" | "SLEEP";

export interface Time {
  hours: number,
  minutes: number,
}
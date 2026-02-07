export const CLOCK_MODE_MAX_HOURS = 23;
export const CLOCK_MODE_MIN_HOURS = 0;
export const CLOCK_MODE_MAX_MINUTES = 59;
export const CLOCK_MODE_MIN_MINUTES = 0;

export const COUNTDOWN_MODE_MAX_HOURS = 24;
export const COUNTDOWN_MODE_MIN_HOURS = 0;
export const COUNTDOWN_MODE_MAX_MINUTES = 59;
export const COUNTDOWN_MODE_MIN_MINUTES = 0;

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

export const is_number_in_range = (
  value: string,
  min: number,
  max: number,
): Boolean => {
  if (!is_input_valid(value)) {
    return false;
  }
  
  return Number(value) >= min && Number(value) <= max;
};

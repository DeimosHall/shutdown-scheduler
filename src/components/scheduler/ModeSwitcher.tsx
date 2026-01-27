import { Box, Container } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Mode } from "../../types/types";
import { CustomButton } from "../common/CustomButton";

interface ModeSwitcherProps {
  mode: Mode;
  onModeChange: (newMode: Mode) => void;
}

export function ModeSwitcher({ mode, onModeChange }: ModeSwitcherProps) {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.customBackground.main,
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          padding: "2px",
        }}
      >
        <CustomButton
          startIcon={<TimerIcon />}
          fullWidth
          isSelected={mode === "COUNTDOWN"}
          onClick={() => onModeChange("COUNTDOWN")}
        >
          Countdown Mode
        </CustomButton>
        <CustomButton
          startIcon={<AccessTimeIcon />}
          fullWidth
          isSelected={mode === "CLOCK"}
          onClick={() => onModeChange("CLOCK")}
        >
          Clock Mode
        </CustomButton>
      </Box>
    </Container>
  );
}

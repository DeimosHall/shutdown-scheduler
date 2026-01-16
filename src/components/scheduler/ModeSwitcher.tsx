import { Box, Button, ButtonProps, Container } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  borderRadius: "10px",
}));

type Mode = "COUNTDOWN" | "CLOCK";

export const ModeSwitcher = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");

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
          sx={{
            backgroundColor: (theme) =>
              mode == "COUNTDOWN" ? theme.palette.primary.main : "transparent",
            "&:hover": {
              backgroundColor: (theme) =>
                mode == "COUNTDOWN"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.light,
            },
          }}
          onClick={() => setMode("COUNTDOWN")}
        >
          Countdown Mode
        </CustomButton>
        <CustomButton
          startIcon={<AccessTimeIcon />}
          fullWidth
          sx={{
            backgroundColor: (theme) =>
              mode == "CLOCK" ? theme.palette.primary.main : "transparent",
            "&:hover": {
              backgroundColor: (theme) =>
                mode == "CLOCK"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.light,
            },
          }}
          onClick={() => setMode("CLOCK")}
        >
          Clock Mode
        </CustomButton>
      </Box>
    </Container>
  );
};

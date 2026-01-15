import { Box, Button, ButtonProps, Container } from "@mui/material";
import TimerIcon from '@mui/icons-material/Timer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#137fec'),
  backgroundColor: '#137fec',
  '&:hover': {
    backgroundColor: '#1476d9',
  },
  borderRadius: '10px'
}));

type Mode = "COUNTDOWN" | "CLOCK";

export const ModeSwitcher = () => {
  const [mode, setMode] = useState<Mode>("COUNTDOWN");
  
  return (
    <Container maxWidth="lg">
      <Box sx={{
        bgcolor: '#11161d',
        height: '10vh',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        padding: '2px'
      }} >
        <CustomButton
          startIcon={<TimerIcon />}
          fullWidth
          sx={{
            backgroundColor: mode == "COUNTDOWN" ? '#137fec' : 'transparent',
            '&:hover': {
              backgroundColor: mode == "COUNTDOWN" ? '#1476d9' : '#192b3d'
            }
          }}
          onClick={() => setMode("COUNTDOWN")}
        >
          Countdown Mode
        </CustomButton>
        <CustomButton
          startIcon={<AccessTimeIcon />}
          fullWidth
          sx={{
            backgroundColor: mode == "CLOCK" ? '#137fec' : 'transparent',
            '&:hover': {
              backgroundColor: mode == "CLOCK" ? '#1476d9' : '#192b3d'
            }
          }}
          onClick={() => setMode("CLOCK")}
        >
          Clock Mode
        </CustomButton>
      </Box>
    </Container>
  );
}
import { Box, Button, Container, Grid } from "@mui/material";
import { CustomButton } from "../common/CustomButton";

interface ActionButtonsProps {
  started: Boolean;
  onStartedChange: (newStarted: Boolean) => void;
}

export const ActionButtons = ({
  started,
  onStartedChange,
}: ActionButtonsProps) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ width: "100%", marginTop: "5%" }}>
        <Grid size={4}>
          <Button
            fullWidth
            disabled={started === false}
            variant="contained"
            color="error"
            onClick={() => onStartedChange(false)}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
        </Grid>
        <Grid size={8}>
          <CustomButton
            fullWidth
            disabled={started === true}
            isSelected={true}
            onClick={() => onStartedChange(true)}
          >
            Start Timer
          </CustomButton>
        </Grid>
      </Grid>
    </Container>
  );
};

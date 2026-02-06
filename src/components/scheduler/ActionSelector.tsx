import { Box, Button, ButtonProps, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Action } from "../../types/types";
import { NightsStay, PowerSettingsNew, RestartAlt } from "@mui/icons-material";

interface ActionSelectorProps {
  action: Action;
  onActionChange: (newAction: Action) => void;
}

interface ActionButtonProps extends ButtonProps {
  isSelected?: Boolean;
}

const ActionButton = styled(Button, {
  // Prevent 'isSelected' from being passed to the DOM element
  shouldForwardProp: (prop) => prop !== "isSelected",
})<ActionButtonProps>(({ theme, isSelected }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: isSelected
    ? theme.palette.actionButton.selected
    : theme.palette.actionButton.unselected,
  "&:hover": {
    backgroundColor: theme.palette.actionButton.hover,
  },
  borderRadius: "10px",
  border: `1px solid ${isSelected ? theme.palette.actionButton.border : theme.palette.border.main}`,
  textTransform: "none",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  minWidth: "150px",
}));

export const ActionSelector = ({
  action,
  onActionChange,
}: ActionSelectorProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "5%",
        }}
      >
        <Grid container spacing={2}>
          <Grid size="auto">
            <ActionButton
              isSelected={action === "SHUTDOWN"}
              onClick={() => onActionChange("SHUTDOWN")}
            >
              <PowerSettingsNew sx={{ fontSize: 40 }} />
              <span>Shutdown</span>
            </ActionButton>
          </Grid>
          <Grid size="auto">
            <ActionButton
              isSelected={action === "RESTART"}
              onClick={() => onActionChange("RESTART")}
            >
              <RestartAlt sx={{ fontSize: 40 }} />
              <span>Restart</span>
            </ActionButton>
          </Grid>
          {/*<Grid size="auto">
            <ActionButton
              isSelected={action === "SLEEP"}
              onClick={() => onActionChange("SLEEP")}
            >
              <NightsStay sx={{ fontSize: 40 }} />
              <span>Sleep</span>
            </ActionButton>
          </Grid>*/}
        </Grid>
      </Box>
    </>
  );
};

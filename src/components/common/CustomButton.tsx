import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomButtonProps extends ButtonProps {
  isSelected?: Boolean;
}

export const CustomButton = styled(Button, {
  // Prevent 'isSelected' from being passed to the DOM element
  shouldForwardProp: (prop) => prop !== "isSelected",
})<CustomButtonProps>(({ theme, isSelected }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: isSelected
    ? theme.palette.mainButton.main
    : theme.palette.secondaryButton.main,
  "&:hover": {
    backgroundColor: isSelected
      ? theme.palette.mainButton.hover
      : theme.palette.secondaryButton.hover,
  },
  borderRadius: "10px",
  textTransform: "none",
}));

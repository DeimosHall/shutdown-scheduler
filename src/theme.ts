import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      main: string;
      light: string;
    },
    border: {
      main: string;
    },
    mainButton: {
      main: string;
      hover: string;
    },
    secondaryButton: {
      main: string;
      hover: string;
    }
  }
  interface PaletteOptions {
    customBackground?: {
      main: string;
      light: string;
    },
    border?: {
      main: string;
    },
    mainButton?: {
      main: string;
      hover: string;
    },
    secondaryButton?: {
      main: string;
      hover: string;
    }
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#137fec",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f0f2f5",
      paper: "#ffffff",
    },
    customBackground: {
      main: "#e0e0e0",
      light: "#f5f5f5",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#137fec", // blue for buttons
      dark: "#1476d9", // hover for blue bg
      light: "#192b3d", // hover for dark bg
      contrastText: "#ffffff",
    },
    background: {
      default: "#1c242e",
      paper: "#1e1e1e",
    },
    customBackground: {
      main: "#11161d",
      light: "#192b3d", // Not used
    },
    mainButton: {
      main: "#137fec",
      hover: "#1476d9",
    },
    secondaryButton: {
      main: "#11161d",
      hover: "#192b3d",
    },
    border: {
      main: "#2a3340",
    }
  },
});

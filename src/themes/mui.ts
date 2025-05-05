import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: "#077ABD",
        },
        secondary: {
            main: "#FF8C00",
        },
        background: {
            default: "#F5F5F5",
        },
    },
    typography: {
        fontFamily: "'Mulish', 'Inter', sans-serif"
    },
    components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 8
            }
          },
        },
      },
};

export const theme = createTheme(themeOptions);
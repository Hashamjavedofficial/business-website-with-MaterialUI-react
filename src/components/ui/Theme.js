import { createMuiTheme } from "@material-ui/core";

const { arcBlue, arcOrange } = {
  arcBlue: "#0B72B9",
  arcOrange: "#FFBA60",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;

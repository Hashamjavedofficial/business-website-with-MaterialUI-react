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
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    estimate: {
      margin: "0px 25px 0px 50px",
      fontSize: "0.8rem",
      color: "white",
      fontFamily: "Pacifico",
    },
  },
});

export default theme;

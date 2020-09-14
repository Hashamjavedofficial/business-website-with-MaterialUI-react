import { createMuiTheme } from "@material-ui/core";

const { arcBlue, arcOrange, arcGrey } = {
  arcBlue: "#0B72B9",
  arcOrange: "#ffba60",
  arcGrey: "#868686",
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
    h2: {
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.4,
    },
    h4: {
      color: `${arcBlue}`,
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    subtitle1: {
      color: `${arcGrey}`,
      fontWeight: "300",
      fontSize: "1.25rem",
    },
    subtitle2: {
      color: `${arcGrey}`,
      fontWeight: "400",
      fontSize: "1.25rem",
    },
  },
});

export default theme;

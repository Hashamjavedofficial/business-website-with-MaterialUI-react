import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import footerAdorment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: "1302",
    position: "relative",
  },
  adorment: {
    width: "22em",
    verticalAlign: "bottom",

    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontWeight: "bold",
    fontSize: "0.75rem",
    fontFamily: "Arial",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify={"center"}
        className={classes.mainContainer}
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Grid container direction={"column"} spacing={2}>
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction={"column"} spacing={2}>
            <Grid item className={classes.link}>
              Services
            </Grid>
            <Grid item className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item className={classes.link}>
              Mobile App development
            </Grid>
            <Grid item className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction={"column"} spacing={2}>
            <Grid item className={classes.link}>
              The Revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction={"column"} spacing={2}>
            <Grid item className={classes.link}>
              About Us
            </Grid>
            <Grid item className={classes.link}>
              History
            </Grid>
            <Grid item className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction={"column"} spacing={2}>
            <Grid item className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdorment}
        alt="Footer Adorment"
        className={classes.adorment}
      />
    </footer>
  );
};
export default Footer;

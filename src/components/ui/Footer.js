import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import footerAdorment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

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
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "18em",
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
  girdItem: {
    margin: "3em",
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-5em",
    right: "01.5em",
    [theme.breakpoints.down("'xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { selectedIndex, setSelectedIndex, setValue, value } = props;
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify={"center"}
          className={classes.mainContainer}
          spacing={3}
        >
          <Grid item className={classes.girdItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => {
                  setValue(0);
                }}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.girdItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                className={classes.link}
              >
                Mobile App development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.girdItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.girdItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                component={Link}
                to="/aboutus"
                onClick={() => {
                  setValue(3);
                }}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/history"
                className={classes.link}
              >
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to="/team">
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.girdItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contactus"
                onClick={() => {
                  setValue(4);
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src={footerAdorment}
        alt="Footer Adorment"
        className={classes.adorment}
      />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
        className={classes.socialContainer}
      >
        <Grid
          item
          className={classes.icon}
          component={"a"}
          href="http://www.facebook.com"
          target="_blank"
        >
          <img src={facebook} alt="facebook" />
        </Grid>
        <Grid
          item
          component={"a"}
          className={classes.icon}
          href="http://www.twitter.com"
          target="_blank"
        >
          <img src={twitter} alt="twitter" />
        </Grid>
        <Grid
          item
          className={classes.icon}
          href="http://www.instagram.com"
          target="_blank"
          component="a"
        >
          <img src={instagram} alt="instagram" />
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;

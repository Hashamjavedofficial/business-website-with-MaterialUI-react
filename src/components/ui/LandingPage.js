import React from "react";
import { Grid, Button, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as animationData from "../../animations/hert.json";
import ButtonArrow from "./5.1 ButtonArrow";
import CustomSoftwareIcon from "../../assets/Custom Software Icon.svg";

const useStyle = makeStyles((theme) => ({
  animation: {
    marginTop: "2em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    height: "40px",
    width: "150px",
    marginRight: "40px",
    borderRadius: "25px",
    fontSize: "0.75rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "2em",
  },
  learnButton: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "25px",

    color: theme.palette.primary.main,
    fontWeight: "bold",
    height: "40px",
    width: "150px",
    fontSize: "0.75rem",
  },
  animationImage: {
    width: "20em",
    height: "20em",
  },
  celebrate: {
    color: theme.palette.secondary.main,
    fontFamily: "Pacifico",
  },
  subtitle1: {
    paddingBottom: "4",
  },
  learnSmall: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "25px",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    height: "30px",
    width: "100px",
    fontSize: "0.5rem",
  },
}));
const LandingPage = (props) => {
  const theme = useTheme();
  const classes = useStyle();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="center" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="center">
              Bring Westcost Technology <br />
              to the Midwest <br />
            </Typography>
            <Grid
              container
              justify="center"
              spacing={2}
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnButton}>
                  Learn More
                  <ButtonArrow width={15} height={15} fill="orange" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <img
              className={classes.animationImage}
              src={require("../../animations/animation.gif")}
              alt="Loaiding"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Save time, Save money
            </Typography>
            <Typography variant="subtitle2">
              Complete digital solution, from investigate to{" "}
              <span className={classes.celebrate}>celebrate</span>
            </Typography>
            <Button className={classes.learnSmall}>
              Learn More
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item>
            <img src={CustomSoftwareIcon} alt="Software" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

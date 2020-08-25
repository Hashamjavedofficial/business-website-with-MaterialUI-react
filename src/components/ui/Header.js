import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "6em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    padding: "2.9em 0",
    height: "3em",
    borderBottom: "5px",
  },
  button: {
    borderRadius: "50px",
    ...theme.typography.estimate,
    textTransform: "none",
    height: "40px",
  },
  buttonContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "0",
    marginTop: "4.15em",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const classes = useStyle();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        value !== 0 && setValue(0);
        break;
      case "/services":
        value !== 1 && setValue(1);
        break;
      case "/revolution":
        value !== 2 && setValue(2);
        break;
      case "/aboutus":
        value !== 3 && setValue(3);
        break;
      case "/contactus":
        value !== 4 && setValue(4);
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/websites":
        if (value !== 2) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      default:
        break;
    }
    return () => {};
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
    setValue(1);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setOpen(false);
  };
  const options = [
    { link: "/customsoftware", text: "Custom Softwares Development" },
    { link: "/mobileapps", text: "Mobile Applications Development" },
    { link: "/websites", text: "Websites Development" },
  ];
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to={"/"}
              className={classes.buttonContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="Company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to={"/"}
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "simple-menu" : undefined}
                onMouseOver={(event) => handleClick(event)}
                className={classes.tab}
                component={Link}
                to={"/services"}
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to={"/revolution"}
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to={"/aboutus"}
                label="About Us"
              />

              <Tab
                className={classes.tab}
                component={Link}
                to={"/contactus"}
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              elevation={0}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              {options.map((option, i) => {
                return (
                  <MenuItem
                    key={option}
                    classes={{ root: classes.menuItem }}
                    selected={i === selectedIndex && value === 1}
                    onClick={(event) => {
                      handleMenuItemClick(event, i);
                      handleClose();
                    }}
                    component={Link}
                    to={option.link}
                  >
                    {option.text}
                  </MenuItem>
                );
              })}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.logo}></Toolbar>
    </React.Fragment>
  );
};

export default Header;

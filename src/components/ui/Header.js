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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    padding: "2.9em 0",
    height: "3em",
    borderBottom: "5px",
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    borderRadius: "30px",
    ...theme.typography.estimate,
    textTransform: "none",
    height: "40px",
    width: "10em",
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
  menuIcon: {
    height: "50px",
    width: "50px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      height: "40px",
      width: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30px",
      width: "30px",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "$:hover": {
      background: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.secondary.main,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to={"/"} label="Home" />
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
        component={Link}
        to={"/estimate"}
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
              key={i}
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
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Toolbar className={classes.logo} />
        <List disablePadding>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            component={Link}
            selected={value === 0}
            to={"/"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            selected={value === 1}
            component={Link}
            to={"/services"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
          >
            <ListItemText>Services</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            component={Link}
            selected={value === 2}
            to={"/revolution"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
          >
            <ListItemText>The Revolution</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            component={Link}
            selected={value === 3}
            to={"/aboutus"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
          >
            <ListItemText>About Us</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            component={Link}
            selected={value === 4}
            to={"/contactus"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
          >
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemEstimate}
            divider
            button
            component={Link}
            to={"/estimate"}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText className={classes.drawerItem}>Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"} className={classes.appbar}>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.logo}></Toolbar>
    </React.Fragment>
  );
};

export default Header;

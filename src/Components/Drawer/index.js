import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import drawerBgImage from "../../Images/bg.jpg";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    backgroundImage: "url(" + drawerBgImage + ")",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundImage: "url(" + drawerBgImage + ")",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(8) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  transparentBg: {
    opacity: 1,
  },
  linkStyle: {
    textDecoration: 'none'
  },
}));

export default function MiniDrawer({ toggleDrawer, open }) {
  const classes = useStyles();

  const firstListDrawerOptions = [
    { id: 0, route: '/home', title: 'home', initial: <Avatar className={classes.transparentBg}><HomeIcon /></Avatar> },
    { id: 1, route: '/Dashboard', title: 'Dashboard', initial: <Avatar className={classes.transparentBg}> <DashboardIcon /> </Avatar> },
  ]

  const secondListDrawerOptions = [
    { id: 0, route: '/recipes', title: 'Listar Receitas', image: <Avatar className={classes.transparentBg}><FastfoodIcon /> </Avatar> },
    { id: 1, route: '/tags', title: 'Listar Tags', image: <Avatar className={classes.transparentBg}><LoyaltyIcon /> </Avatar> },
    { id: 2, route: '/add-recipe', title: 'Add Receitas', image: <Avatar className={classes.transparentBg}><AddCircleIcon /> </Avatar> },
  ]
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <div className={classes.toolbar}>
        <IconButton
          aria-label="open drawer"
          onClick={() => toggleDrawer()}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {firstListDrawerOptions.map((options, index) => (
          <Link to={options.route} className={classes.linkStyle} key={index}>
            <ListItem button key={options.id}>
              <ListItemIcon >{options.initial}</ListItemIcon>
              <ListItemText secondary={options.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {secondListDrawerOptions.map((options, index) => (
          <Link to={options.route} className={classes.linkStyle} key={index}>
            <ListItem button key={options.id}>
              <ListItemIcon>{options.image}</ListItemIcon>
              <ListItemText secondary={options.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, Body2 } from "__SHARED__";
import { NAV } from "__APPMAIN__/_helpers/constants";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Feature" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Guidelines" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SubscriptionsIcon />
      </ListItemIcon>
      <ListItemText primary="Subscribe" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="User Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link to={NAV.LOGIN}>
          <ExitToAppIcon />
        </Link>
      </ListItemIcon>
      <ListItemText>
        <Link to={NAV.LOGIN}>
          <Body2 color="inherit">Log Out</Body2>
        </Link>
      </ListItemText>
    </ListItem>
  </div>
);

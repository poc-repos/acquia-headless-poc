import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Header2 } from "__SHARED__";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
// import { Link, Body2 } from "__SHARED__";

import LoginPage from "../Login";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "#00467f"
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",

    width: "65%",
    margin: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  alignCenter: {
    margin: "10px 0px",
    textAlign: "center"
  },
  HeaderDesign: {},
  totalWidth: {
    maxWidth: "100%"
  },
  headerStyle: {
    fontSize: "2.375rem",
    lineHeight: "1.45em"
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { noLogin, history } = props;
  const sections = [
    { title: "About", url: "#" },
    { title: "Feature", url: "#" },
    { title: "Pricing", url: "#" },
    { title: "Subscribe", url: "#" }
  ];
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center">
          <Grid className={classes.alignCenter} item xs={noLogin ? 12 : 11}>
            <img
              className={classes.totalWidth}
              src="https://www.irefer.org.uk/sites/all/themes/custom/irefer/logo.png"
            />
          </Grid>
          {!noLogin && (
            <Grid className={classes.alignCenter} item xs>
              <LoginPage {...props} />
            </Grid>
          )}
        </Grid>
      </Toolbar>
      <Grid className={classes.HeaderDesign} container>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          <Header2 className={classes.headerStyle}>
            Welcome to IRefer Application
          </Header2>
          {/* {sections.map((section) => (
            <Link to={section.url}>
              <Body2 color="inherit">{section.title}</Body2>
            </Link>
          ))} */}
        </Toolbar>
      </Grid>
    </>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
  noLogin: PropTypes.bool
};

Header.defaultProps = {
  noLogin: false
};

export default Header;

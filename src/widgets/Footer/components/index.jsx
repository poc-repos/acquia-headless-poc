import { NAV } from "__APPMAIN__/_helpers/constants";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Body2, Btn, Link, Header2, Header4 } from "__SHARED__";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.css";

const useStyles = makeStyles(styles);

const currentYear = (() => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return year;
})();

const Footer = ({ location, noLogin }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid className={classes.subFooter}>
        <Grid className={classes.centerText} container>
          <Grid item xs={12} lg={4} md={4}>
            <Header2 className={classes.textAlignLeft} color="inherit">
              iRefer Guidelines: Making the best use of clinical radiology
            </Header2>
            <Header4 className={classes.textAlignLeft} color="inherit">
              Version 8.0.1
            </Header4>
          </Grid>
          <Grid className={classes.rightAlign} item xs={12} lg={8} md={8}>
            <a href="/" title="Home" rel="home">
              <img
                className={classes.totalWidth}
                src="https://www.irefer.org.uk/sites/all/themes/custom/irefer/rcr-logo.png"
                alt="RCR Homepage"
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      {!noLogin && (
        <div
          className={classNames(
            classes.horizontalPadding,
            classes.cookieBackGround
          )}
        >
          <Grid item xs={12}>
            <Body2
              className={classNames(classes.smallPadding, classes.centerText)}
            >
              We use cookies on this site to enhance your user experience. By
              clicking any link on this page you are giving your consent for us
              to set cookies. <Link>No, give me more info</Link>
              <Btn
                className={classes.extraMarginLeft}
                id="cookie-accept-btn"
                type={1}
              >
                Ok, I agree
              </Btn>
              <Btn
                className={classes.extraMarginLeft}
                id="cookie-accept-btn"
                type={1}
              >
                No, Thanks
              </Btn>
            </Body2>
          </Grid>
        </div>
      )}
      <div
        className={classNames(
          classes.footer,
          classes.smallPadding,
          classes.horizontalPadding,
          classes.inverse
        )}
      >
        <Grid
          container
          justify={isDesktop ? "space-between" : "center"}
          spacing={1}
        >
          <Grid item>
            <Grid
              container
              justify={!isDesktop ? "center" : undefined}
              spacing={1}
            >
              <Grid className={classes.extraMargin} item>
                <Body2 color="inherit">Contact</Body2>
              </Grid>
              <Grid className={classes.extraMargin} item>
                <Body2 color="inherit">
                  <a
                    href="https://www.reloaccess.com/oeigp/login/docs/ReloAccessTnC.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Terms &amp; Conditions
                  </a>
                </Body2>
              </Grid>
              <Grid className={classes.extraMargin} item>
                <Body2 color="inherit">
                  <a
                    href="https://www.irefer.com/privacy-policy/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Privacy &amp; Cookies
                  </a>
                </Body2>
              </Grid>
              <Grid className={classes.extraMargin} item>
                <Link link to={NAV.ACCESSIBILITY}>
                  <Body2 color="inherit">Acceptable use</Body2>
                </Link>
              </Grid>
              <Grid className={classes.extraMargin} item>
                <Link link to={NAV.ACCESSIBILITY}>
                  <Body2 color="inherit">Site Map</Body2>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Body2 className={classes.inverse}>
              &copy; The Royal College of Radiologists {currentYear}
            </Body2>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Footer.propTypes = {
  location: PropTypes.object.isRequired,
  noLogin: PropTypes.bool
};

Footer.defaultProps = {
  noLogin: false
};

export default Footer;

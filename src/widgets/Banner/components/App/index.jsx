import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header2, Header4 } from "__SHARED__";
import Grid from "@material-ui/core/Grid";
import styles from "./styles.css.js";

const useStyles = makeStyles(styles);

const Banner = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.bannerDesign} container alignItems="center">
        <Grid item xs={12}>
          <Header2 className={classes.boldFont} color="inherit">
            Making the best use of{" "}
            <span className={classes.redColor}>clinical radiology</span>
            <Header4 className={classes.subColor}>
              Provides the most appropriate imaging investigations or
              intervention for any diagnostic or imaging problem
            </Header4>
          </Header2>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;

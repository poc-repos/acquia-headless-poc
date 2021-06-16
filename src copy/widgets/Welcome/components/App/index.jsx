import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header2, Header4, Link, Btn } from "__SHARED__";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import styles from "./styles.css.js";

import noData from "./noData.json";

const useStyles = makeStyles(styles);

const WelcomeMessage = (props) => {
  const classes = useStyles();
  const { latestData, guidelinesData } = props;
  console.log(guidelinesData, "guidelinesData");
  const isLoginedData = latestData || noData;
  return (
    <>
      <Grid className={classes.mainDesign} container spacing={3}>
        <Grid container>
          <Grid item xs={10}>
            <Header2 className={classes.headerStyle}>
              {isLoginedData.header.title}
            </Header2>
          </Grid>
          <Grid className={classes.flex} item xs={2}>
            <Btn
              fullWidth
              id="Guidelines_Report"
              onClick={() => {
                const url = `https://ireferpocbctdipjj6n.devcloud.acquia-sites.com/${guidelinesData[0].field_document}`;
                window.open(url);
              }}
              type={1}
            >
              Guidelines
            </Btn>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <Grid container spacing={3}>
            {isLoginedData.header.content.map((x) => {
              return (
                <Grid item xs={12}>
                  <Header4
                    className={classNames(classes.subContentSytle, {
                      [classes.boldStyle]: x.fontType === "bold",
                    })}
                  >
                    {x.text}
                  </Header4>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <ul>
            {isLoginedData.header.listView.map((x, index) => {
              return (
                <li>
                  <Header4 className={classes.listViewStyle}>{x}</Header4>
                </li>
              );
            })}
          </ul>
        </Grid>
      </Grid>
      <hr className={classes.hrColor} />
      <Grid className={classes.mainDesign} container>
        <Grid item xs={12} lg={4} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header2>{isLoginedData.subHeader[0].title}</Header2>
            </Grid>
            <Grid item xs={12}>
              <Header4 className={classes.subContentSytle}>
                {isLoginedData.subHeader[0].content}
              </Header4>
            </Grid>
            <Grid item xs={12}>
              <Link to="#">
                <Header4 className={classes.boldStyle} color="inherit">
                  More about our pricing
                </Header4>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header2>{isLoginedData.subHeader[1].title}</Header2>
            </Grid>
            <Grid item xs={12}>
              <Header4 className={classes.subContentSytle}>
                {isLoginedData.subHeader[1].content}
              </Header4>
            </Grid>
            <Grid item xs={12}>
              <Link to="#">
                <Header4 className={classes.boldStyle} color="inherit">
                  Read our full list of FAQs
                </Header4>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header2>Subscribe to iRefer</Header2>
            </Grid>
            <Grid item xs={12}>
              <Header4 className={classes.subContentSytle}>
                Available online in a mobile-responsive format. The search
                functionality makes it easy to find investigations and browse
                related information.
              </Header4>
            </Grid>

            <Grid item xs={12}>
              <Btn type={1}>Subscribe</Btn>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default WelcomeMessage;

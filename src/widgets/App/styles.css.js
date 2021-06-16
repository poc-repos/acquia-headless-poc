const styles = (theme) => ({
  full: {
    height: "100vh",
    overflow: "hidden"
  },
  fullWidth: {
    width: "100%"
  },
  fill: {
    height: "100%"
  },
  scroll: {
    overflow: "hidden",
    /* eslint-disable no-dupe-keys */
    minHeight: "100vh", // this is a fallback to css calc
    minHeight: "calc(100vh - 35px)"
  },
  textShadow: {
    textShadow: "0px 0px 6px black"
  },
  footer: {
    background: theme.IRefer.color.secondardyText,
    zIndex: "1000",
    position: "relative"
  },
  horizontalPadding: {
    paddingLeft: 50,
    paddingRight: 50
  },
  verticalPadding: {
    paddingTop: 30,
    paddingBottom: 20
  },
  smallPadding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  centerText: {
    textAlign: "center"
  },
  center: {
    margin: "0 auto",
    width: "100%"
  },
  inverse: {
    color: "white",
    "& a": {
      color: "white",
      textDecoration: "none"
    }
  },
  leftAlign: {
    textAlign: "left"
  },
  rightAlign: {
    textAlign: "right"
  },
  logo: {
    width: "100%",
    maxWidth: 90,
    height: 35
  },
  extraMargin: {
    marginRight: 10
  },
  extraPaddingTop: {
    marginTop: 10
  },
  // font size override
  title: {
    fontSize: "2.5rem",
    lineHeight: "1",
    margin: "4% 0 5% 0"
  },
  cta: {
    fontSize: "1.025rem",
    lineHeight: "1.6"
  },
  formSpacing: {
    marginTop: "10%",
    marginBottom: "10%"
  },
  loginButtonGap: {
    marginTop: "10%"
  },
  marginAuto: {
    margin: "auto"
  },
  lastButton: {
    // marginBottom: 20
  },
  linksColor: {
    color: theme.IRefer.color.mainAction
  },
  hidden: {
    display: "none"
  },
  linkIco: {
    margin: "0 8px -4px 0px"
  },
  "@media screen and (max-height: 800px)": {
    full: {
      height: 800
    }
  },
  "@media screen and (max-height: 950px)": {
    tall: {
      height: 1000
    }
  },
  [theme.breakpoints.down("sm")]: {
    full: {
      height: "initial", // IE bug, can't use height auto
      minHeight: "100vh"
    },
    fill: {
      height: "initial", // IE bug, can't use height auto
      maxHeight: "initial",
      overflow: "hidden"
    },
    lastButton: {
      marginBottom: 20
    }
  },
  verticalAllign: {
    verticalAlign: "middle"
  },
  linksColor: {
    color: theme.IRefer.color.mainAction
  },
  bold: {
    ...theme.IRefer.fonts.guardianTextSansBold
  },
  cookieBackGround: {
    background: theme.IRefer.color.tabBackground
  },
  extraMarginLeft: {
    marginLeft: 10
  },
  commitmentAccessbilityMxWidth: {
    maxWidth: 900,
    width: "100%",
    margin: "auto"
  },
  imgsMaxWidth: {
    width: "100%",
    height: "initial" // IE bug, can't use height auto
  },
  dialogContent: {
    padding: "0px",
    backgroundColor: theme.IRefer.color.titleHeaders
  },
  pictureContainer: {
    position: "relative"
  },
  trademark: theme.IRefer.css.trademark,
  subFooter: {
    color: "white",
    padding: "30px 0px 30px 0px",
    background:
      "#746f75 url(https://www.irefer.org.uk/sites/all/themes/custom/irefer/img/footer-overlay.png) center center no-repeat"
  },
  textAlignLeft: {
    textAlign: "left",
    lineHeight: "25px"
  }
});

export default styles;

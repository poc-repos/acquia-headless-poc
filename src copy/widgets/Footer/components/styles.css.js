const styles = (theme) => ({
  footer: {
    background: theme.IRefer.color.secondardyText,
    zIndex: "1000",
    position: "relative"
  },
  horizontalPadding: {
    paddingLeft: 50,
    paddingRight: 50
  },
  smallPadding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  centerText: {
    textAlign: "center",
    width: "65%",
    margin: "auto"
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
  extraMargin: {
    marginRight: 10
  },
  cookieBackGround: {
    background: theme.IRefer.color.tabBackground
  },
  extraMarginLeft: {
    marginLeft: 10
  },
  subFooter: {
    color: "white",
    padding: "30px 0px 30px 0px",
    background:
      "#746f75 url(https://www.irefer.org.uk/sites/all/themes/custom/irefer/img/footer-overlay.png) center center no-repeat"
  },
  textAlignLeft: {
    textAlign: "left",
    lineHeight: "25px"
  },
  totalWidth: {
    maxWidth: "100%"
  }
});

export default styles;

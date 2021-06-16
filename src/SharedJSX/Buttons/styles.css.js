const styles = (theme) => ({
  // todo: move to global some common props
  white: {
    fill: theme.IRefer.color.white
  },
  root: {
    color: theme.IRefer.color.white,
    fontWeight: 700,
    fontStyle: "normal",
    fontStretch: "normal",
    fontSize: "0.875rem",
    textTransform: "capitalize",
    "&$disabled": {
      boxShadow: "none"
    }
  },
  large: {
    fontSize: "1.125rem",
    lineHeight: "1.3",
    paddingLeft: "30px",
    paddingRight: "40px",
    textTransform: "capitalize",
    "& span": {
      fontWeight: 700
    }
  },
  leftAlign: {
    textAlign: "left"
  },
  type1: {
    background: theme.IRefer.color.titleHeaders,
    border: `1px solid ${theme.IRefer.color.titleHeaders}`,
    "&:hover": {
      background: theme.IRefer.color.secondaryActionHover,
      borderColor: theme.IRefer.color.secondaryActionHover
    },
    "&$disabled": {
      background: theme.IRefer.color.darkGray,
      border: `1px solid ${theme.IRefer.color.darkGray}`,
      color: theme.IRefer.color.white,
      /* Sometimes before disabling the button we are getting hover in 
        mobile view. So added the below css for replacing the transparent
      */
      "&:hover": {
        background: theme.IRefer.color.darkGray
      }
    }
  },
  disabled: {}, // Don't delete, need an empty class otherwise root mui style won't get compiled
  hide: {
    display: "none"
  },
  icon: {
    fill: theme.IRefer.color.titleHeaders,
    marginRight: "5px",
    width: 18,
    height: 18,
    "&$disabled": {
      fill: theme.IRefer.color.buttonDisabled
    },
    "& svg": {
      width: 18,
      height: 18,
      display: "block"
    }
  },
  iconType1: {
    fill: theme.IRefer.color.white
  },
  iconRight: {
    marginRight: 0,
    marginLeft: 5
  },
  largeIcon: {
    padding: "10px",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    backgroundColor: "#fff",
    display: "flex",
    marginRight: "15px",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      maxWidth: "50px",
      maxHeight: "50px",
      width: "100%",
      height: "100%"
    }
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    large: {
      fontWeight: 700,
      fontStyle: "normal",
      fontStretch: "normal",
      fontSize: "0.875rem",
      padding: "auto"
    }
  },
  focus: {
    ...theme.IRefer.focus
  },
  btnSpacing: {
    margin: "0 10px 10px 0",
    border: "1px solid transparent" // making btn height consistent to 34px because backBtn type={3} i.e. no border
  }
});

export default styles;

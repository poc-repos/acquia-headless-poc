const styles = (theme) => ({
    noDecor: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none"
      }
    },
    decor: {
      textDecoration: "underline",
      color: theme.IRefer.color.mainAction
    },
    centered: {
      "& button": {
        width: "100%",
        textAlign: "center"
      }
    }
  });
  
  export default styles;
  
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const styles = () => ({});

const PaperBGRS = ({
  classes,
  children,
  className,
  elevation,
  minHeight,
  variant,
  square
}) => (
  <Paper
    className={classNames(classes.defaultStyle, className)}
    elevation={elevation}
    square={square}
    style={{
      minHeight
    }}
    variant={variant}
  >
    {children}
  </Paper>
);
PaperBGRS.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  elevation: PropTypes.number,
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  square: PropTypes.bool,
  variant: PropTypes.string
};
PaperBGRS.defaultProps = {
  className: null,
  elevation: 3,
  minHeight: null,
  square: false,
  variant: "elevation"
};

export default withStyles(styles)(PaperBGRS);

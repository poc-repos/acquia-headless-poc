import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.css";

const useStyles = makeStyles(styles);

const Body2 = (props) => {
  const { bold, className, color, children, noWrap, paragraph } = props;
  const classes = useStyles({ color });

  let role;
  if (paragraph) {
    role = "paragraph";
  }

  return (
    <div
      className={classNames(
        classes.bodies,
        classes.body2,
        classes.colorOverride,
        {
          [classes.noWrap]: noWrap,
          [classes.bold]: bold
        },
        className
      )}
      role={role}
    >
      {children}
    </div>
  );
};

Body2.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool
};

Body2.defaultProps = {
  bold: false,
  className: null,
  color: undefined,
  noWrap: false,
  paragraph: false
};

export default Body2;

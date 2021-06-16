import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.css";

const useStyles = makeStyles(styles);

const Header1 = (props) => {
  const { className, color, children, noWrap, pagetitle } = props;
  const classes = useStyles({ color });

  return (
    <div
      aria-level="1"
      className={classNames(
        classes.header1,
        classes.colorOverride,
        {
          [classes.noWrap]: noWrap,
          [classes.pagetitle]: pagetitle
        },
        className
      )}
      role="heading"
    >
      {children}
    </div>
  );
};

Header1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  noWrap: PropTypes.bool,
  pagetitle: PropTypes.bool
};

Header1.defaultProps = {
  className: null,
  color: undefined,
  noWrap: false,
  pagetitle: true
};

export default Header1;

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.css";

const useStyles = makeStyles(styles);

const Header2 = (props) => {
  const { className, color, children, noWrap } = props;
  const classes = useStyles({ color });

  return (
    <div
      aria-level="4"
      className={classNames(
        classes.headers,
        classes.header4,
        classes.colorOverride,
        { [classes.noWrap]: noWrap },
        className
      )}
      role="heading"
    >
      {children}
    </div>
  );
};

Header2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  noWrap: PropTypes.bool
};

Header2.defaultProps = {
  className: null,
  color: undefined,
  noWrap: false
};

export default Header2;

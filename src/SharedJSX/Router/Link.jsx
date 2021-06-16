import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import getRouterSearchParam from "./param";
import styles from "./styles.css";

const LinkBGRS = ({ classes, disabled, centered, to, link, ...props }) => {
  const routerSearchParam = getRouterSearchParam();
  const { children } = props;

  if (disabled) {
    return (
      <div className={centered && classes.centered}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { disabled })
        )}
      </div>
    );
  }

  return (
    <Link
      {...props}
      className={classNames(classes.noDecor, {
        [classes.centered]: centered,
        [classes.decor]: link
      })}
      to={`${to}${routerSearchParam}`}
    />
  );
};

LinkBGRS.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  to: PropTypes.string.isRequired
};

LinkBGRS.defaultProps = {
  centered: false,
  disabled: false,
  link: false
};

export default withStyles(styles)(LinkBGRS);

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import getStyleType from "./_helper";
import styles from "./styles.css";

const Btn = (props) => {
  const {
    alignRightIcon,
    autoFocus,
    ariaLabel,
    buttonType,
    classes,
    icon,
    iconRight,
    className,
    children,
    onClick,
    fullWidth,
    type,
    id,
    size,
    disabled,
    loading,
    show,
    tabIndex,
    classesObj
  } = props;
  const styleType = getStyleType(type, classes);
  let btnIcon = icon;
  if (disabled) btnIcon = <LockOutlinedIcon />;
  if (loading) btnIcon = <CircularProgress color="inherit" size={18} />;

  const disabledState = disabled || loading;

  return (
    <Button
      aria-label={ariaLabel}
      autoFocus={autoFocus}
      classes={{
        disabled: classes.disabled,
        root: classesObj
      }}
      className={classNames(classes.root, styleType, className, {
        [classes.disabled]: disabledState,
        [classes.large]: size === "large",
        [classes.leftAlign]: size === "large" && btnIcon,
        [classes.hide]: !show
      })}
      data-test="Button"
      disabled={disabledState}
      fullWidth={fullWidth}
      id={id}
      onClick={!disabledState ? onClick : null}
      size={size} // [aria]
      tabIndex={tabIndex}
      type={buttonType}
      variant="text"
    >
      {btnIcon && (
        <span
          className={classNames(classes.icon, {
            [classes.largeIcon]: size === "large",
            [classes.disabled]: disabledState,
            [classes.iconType1]: type === 1 && size !== "large"
          })}
        >
          {btnIcon}
        </span>
      )}
      {children}
      {iconRight && (
        <span
          className={classNames(
            alignRightIcon,
            classes.icon,
            classes.iconRight,
            {
              [classes.largeIcon]: size === "large",
              [classes.disabled]: disabledState
            }
          )}
        >
          {iconRight}
        </span>
      )}
    </Button>
  );
};

Btn.propTypes = {
  alignRightIcon: PropTypes.string,
  ariaLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  autoFocus: PropTypes.bool,
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  classesObj: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  iconRight: PropTypes.node,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  size: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.number.isRequired
};
Btn.defaultProps = {
  alignRightIcon: null,
  ariaLabel: null,
  autoFocus: false,
  buttonType: "button",
  classesObj: null,
  className: null,
  disabled: false,
  fullWidth: false,
  icon: null,
  iconRight: null,
  loading: false,
  onClick: () => {},
  show: true,
  size: "small",
  tabIndex: 0
};
export default withStyles(styles)(Btn);

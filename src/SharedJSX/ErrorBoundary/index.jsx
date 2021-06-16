import { Body1, Body2 } from "../Fonts";
import PaperBGRS from "../Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const styles = {
    wrapper: {
      padding: "2em",
      textAlign: "center"
    },
    rowSpacing: {
      marginBottom: 15
    }
  };  

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false};
  }

  componentDidCatch = () => {
    this.setState({
      hasError: true
    });
  };

  render() {
    const { hasError } = this.state;
    const { children, classes } = this.props;

    if (hasError) {
      return (
        <PaperBGRS>
          <div className={classes.wrapper}>
            <Body1 className={classes.rowSpacing}>We&apos;re sorry.</Body1>
            <Body2 className={classes.rowSpacing}>
              Something went wrong.
              <br />
            </Body2>
            <Body2>
              <a href="/">Back to home.</a>
            </Body2>
          </div>
        </PaperBGRS>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ErrorBoundary);

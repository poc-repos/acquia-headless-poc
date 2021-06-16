import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Header2, Btn, Header4, Link, Body2 } from "__SHARED__";

const styles = (theme) => ({
  fontDesign: {
    color: theme.IRefer.color.secondardyText
  },
  btnGap: {
    paddingTop: 20
  },
  rightAlign: {
    textAlign: "right"
  },
  formSpacingTwo: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  minimumHeight: {
    height: 450
  },
  topBorder: {
    borderTop: "8px solid #00677f"
  },
  redColor: {
    color: "red"
  }
});

const useStyles = makeStyles(styles);

export default function LoginPage({
  history,
  setValue,
  userName,
  userPassword,
  loginError,
  loginDetails,
  loginEr
}) {
  const [open, setOpen] = useState(false);
  const [showError, setOpenError] = useState(loginEr);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getError = () => {
    if (!userName || userName === "") {
      return "Please enter a User Name";
    }
    if (!userPassword || userPassword === "") {
      return "Please enter a User Name";
    }
    return "";
  };

  return (
    <div>
      <Btn type={2} onClick={handleClickOpen}>
        Login
      </Btn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.topBorder}>Login</DialogTitle>
        <DialogContent className={classes.minimumHeight}>
          <DialogContentText>
            <Header2 className={classes.fontDesign}>
              Please use the email address you have registered to log in. If you
              do not have an account, you can create one. Subscribe
            </Header2>
          </DialogContentText>
          <Grid className={classes.btnGap} container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                id="name"
                fullWidth
                label="Email Address"
                type="email"
                required
                variant="outlined"
                value={userName}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={userPassword}
                onChange={(e) => {
                  setValue(e.target.value, 0);
                }}
              />
            </Grid>
            {showError && (
              <Grid item xs={12}>
                <Body2 className={classes.redColor}>
                  {getError() || loginError}
                </Body2>
              </Grid>
            )}
            <Grid item xs={12}>
              <Header4 className={classes.rightAlign}>
                <Link link to="#">
                  Forgot password?
                </Link>
              </Header4>
            </Grid>
            <Grid className={classes.formSpacingTwo} item xs={12}>
              <Btn
                buttonType="submit"
                centered
                className={classes.lastButton}
                fullWidth
                id="login-btn"
                onClick={() => {
                  setOpenError(true);
                  loginDetails(userName, userPassword, history);
                }}
                type={1}
              >
                Log In
              </Btn>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Btn type={1} onClick={handleClose}>
            Cancel
          </Btn>
          <Btn type={1} onClick={handleClose}>
            Login For RCR members
          </Btn>
        </DialogActions>
      </Dialog>
    </div>
  );
}

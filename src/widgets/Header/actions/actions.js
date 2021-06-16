import { createAction, post } from "__GLOBAL__/utils";
import {
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  SHOW_ERROR,
} from "../_helpers";
import { NAV } from "__APPMAIN__/_helpers/constants";

export const updateUserName = createAction(USERNAME_CHANGE, "value");
export const updatePassword = createAction(PASSWORD_CHANGE, "value");
export const showError = createAction(SHOW_ERROR, "value");
export const loginSuccess = createAction(LOGIN_SUCCESS, "value");

export const setValue =
  (value, type = 1) =>
  (dispatch) => {
    if (type === 1) {
      dispatch(updateUserName(value));
    } else {
      dispatch(updatePassword(value));
    }
  };

export const loginDetails = (userName, userPassword, history) => (dispatch) => {
  dispatch(showError(""));
  post({
    url: "https://ireferpocbctdipjj6n.devcloud.acquia-sites.com/user/login?_format=json",
    inputs: { name: userName, pass: userPassword },
  }).then((res) => {
    console.log(res);
    if (res && !res.data.message) {
      console.log(res, "res");
      dispatch(loginSuccess(res.data.current_user));
      history.push(NAV.HOME);
    } else {
      dispatch(showError("Sorry, unrecognized username or password."));
    }
  });
};

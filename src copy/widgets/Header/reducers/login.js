import { produce } from "immer";
import { createReducer } from "__GLOBAL__/utils";
import {
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  SHOW_ERROR,
} from "../_helpers";

const defaultState = {
  userName: "",
  userPassword: "",
  loginError: "",
  loginEr: false,
};

const loginReducer = {
  [USERNAME_CHANGE]: (state, action) =>
    produce(state, (draft) => {
      draft.userName = action.value;
    }),
  [PASSWORD_CHANGE]: (state, action) =>
    produce(state, (draft) => {
      draft.userPassword = action.value;
    }),
  [LOGIN_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.userPassword = "";
      draft.userName = action.value.name;
      draft.loginEr = false;
    }),
  [SHOW_ERROR]: (state, action) =>
    produce(state, (draft) => {
      draft.loginError = action.value;
      draft.loginEr = true;
    }),
};

export default createReducer(defaultState, loginReducer);

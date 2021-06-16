import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import appReducer from "./App/reducer/reducer";
import loginReducer from "./Header/reducers/login";
import homePageReducer from "./HomePage/reducers/homePage";

const rootReducer = combineReducers({
  appReducer,
  form: reduxFormReducer,
  loginReducer,
  homePageReducer
});

export default rootReducer;

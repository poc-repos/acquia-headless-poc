import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {ThemeCSS} from "__GLOBAL__/styles/themeCSS";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import App from "./widgets/App";
import combinedReducer from "./widgets/combineReducer";

const rootElement = document.getElementById("root");
const composedEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(combinedReducer, composedEnhancer);

ReactDOM.render(
  <MuiThemeProvider theme={ThemeCSS}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  rootElement
);

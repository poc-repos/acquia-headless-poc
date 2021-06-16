import { NAV } from "../_helpers/constants";
import { ErrorBoundary } from "__SHARED__";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Login from "../../Login/components/App";
import Home from "../../HomePage/components/App";

const App = (props) => (
  <ErrorBoundary>
    <Router>
      <Route component={Login} exact path={NAV.LOGIN} />
      <Route component={Home} exact path={NAV.HOME} />
    </Router>
  </ErrorBoundary>
);

export default App;

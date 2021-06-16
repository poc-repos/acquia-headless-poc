import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";

import LoginPage from "./component";
import * as LoginActons from "../../actions/actions";

const mapStateToProps = (state) => {
  return {
    ...state.loginReducer
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...LoginActons }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "LoginPage",
    enableReinitialize: true
  })(LoginPage)
);

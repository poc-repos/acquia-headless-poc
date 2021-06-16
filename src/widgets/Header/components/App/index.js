import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as LoginActons from "../../actions/actions";
import Header from "./component";

const mapStateToProps = (state) => {
  return {
    ...state.loginReducer
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...LoginActons }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

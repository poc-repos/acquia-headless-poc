// Typical usage: `connect` is called after the component is defined
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import component from "./components";
import * as actions from "./actions"

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

const mapStateToProps = (state) => {
  return {
    ...state.appReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
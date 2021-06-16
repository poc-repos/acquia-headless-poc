import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as HomePageActions from "../../actions/actions";
import Home from "./component";

const mapStateToProps = (state) => {
  return {
    ...state.homePageReducer
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...HomePageActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

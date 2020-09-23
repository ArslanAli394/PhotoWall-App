import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removePost } from "../redux/actions";
import { addPost } from "../redux/actions";
import { addComments } from "../redux/actions";
import {startLoadingPost} from "../redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return { posts: state.postReducer,
  comments: state.commentReducer};
}
function mapDisptachToProps(dispatch) {
  return bindActionCreators({ removePost, addPost , addComments,startLoadingPost}, dispatch);
}
const App = withRouter(connect(mapStateToProps, mapDisptachToProps)(Main));
export default App;

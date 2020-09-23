import React, { Component } from "react";
// import Title from "./Title";
import { Route, Link } from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

class Main extends Component {
  // componentDidMount(){
  //   this.props.startLoadingPost()
  // }
  render() {

    console.log(this.props);
    return (
      <>
        <h1 className="text-info text-center">
          <Link to="/">PhotoWall</Link>
        </h1>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </>
    );
  }
}
export default Main;

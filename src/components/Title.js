import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <h1 className="text-center text-info my-3 display-2">
        {this.props.title}
      </h1>
    );
  }
}
export default Title;

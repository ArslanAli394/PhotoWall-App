import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center my-3">
          <div className="px-3 py-2">
            <Link to="/AddPhoto">
              <b className="text-dark display-3"><strong>+</strong></b>
            </Link>
          </div>
        </div>
        <div className="row">
          {this.props.posts
            .sort(function (x, y) {
              return y.id - x.id;
            })
            .map((post, index) => (
              <Photo key={index} post={post} {...this.props} index={index} />
            ))}
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  post: PropTypes.array.isRequired,
};

export default PhotoWall;

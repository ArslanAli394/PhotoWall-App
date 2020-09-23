import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Photo(props) {
    const post=props.post;
  
    return (
      <div className="col-md-4 text-center my-3">
        <Link to={`/single/${post.id}`}>
          <img
            src={post.imageLink}
            alt={post.description}
          />
        </Link>
        <h3 className="text-info">{post.description}</h3>
       <div style={{display: 'flex',justifyContent:'space-around',alignItems: 'center'}}>
       <button
          className="btn btn-outline-danger"
          onClick={() => {
            props.removePost(props.index);
            props.history.push('/')
          }}
        >
          Remove
        </button>
       
       </div>
        
      </div>
    );
  }

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Photo;

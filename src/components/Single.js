import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";
class Single extends Component {
  render() {
    const { match, posts } = this.props;

    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id);
    const comments =this.props.comments[match.params.id] || [];
    const index =this.props.posts.findIndex(post=>post.id ===id);
    return (
      <>
        <div className="container mt-5">
          
            <div style={{display: 'flex',justifyContent:"center"}}>
              <div>
              <Photo post={post} {...this.props} index={index}/>
              </div>
              
              <div className="mt-3">
              <Comments addComments={this.props.addComments} comments={comments}  id={id}/>
              </div>
            </div>
            
             
        </div>
      </>
    );
  }
}
export default Single;

import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = (event) => {
      event.preventDefault();
      // console.log(event.target.elements.Link.value);
      const imageLink = event.target.elements.Link.value;
      const description = event.target.elements.description.value;
      const post = {
        id: Number(new Date()),
        description: description,
        imageLink: imageLink,
      };

      if (imageLink && description) {
       
        this.props.addPost(post);
        this.props.onHistory.push("/");
      }
    };
  }
  
  render() {
    
    return (
      <>
        <div className="container py-3 my-5 text-center">
          <form className="form my-3" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control my-3"
              name="Link"
              placeholder="Link"
            />
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
            />
            <button className="btn btn-success my-3 btn-block">POST</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddPhoto;

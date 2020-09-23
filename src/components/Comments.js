import React, { Component } from 'react'

export default class Comments extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
handleSubmit(e) {
e.preventDefault();
const comment=e.target.elements.comment.value;
this.props.addComments(comment,this.props.id);
e.target.elements.comment.value=""
}
    render() {
        console.log(this.props.comments)
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="comment there" className="form-control" name="comment"/>
                <button className="btn btn-success">Submit</button>
                </form>
                <hr/>
                {
                    this.props.comments.map((comment,index)=>(
                    <p key={index}>{comment}</p>
                    
                    ))
                    
                }
            </div>
        )
    }
}

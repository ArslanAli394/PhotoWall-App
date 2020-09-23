import {database} from '../database/config';

export function startLoadingPost(){
 return(dispatch)=>{
  return database.ref('post').once('value').then((snapshot)=>{
    let posts=[];
    snapshot.forEach((childSnapshot)=>{
posts.push(childSnapshot.val())

    })
    dispatch(loadPosts(posts))
  })
 }
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index,
  };
}

export function addPost(post) {
  return(dispatch)=>{
    return database.ref('post').update({[post.id]:post}).then(()=>{
      dispatch( {
        type: "ADD_POST",
        post: post,
      });
    }).catch((err)=>{console.log(err)})
  }
  
}
export function addComments(comment,postId) {
  return {
    type: "ADD_COMMENTS",
    comment: comment,
    postId: postId
  };
}
export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts:posts
  };
}
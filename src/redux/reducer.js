import posts from "../data/AllState";
import {combineReducers} from "redux";

function postReducer(state = posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_POST":
      return [...state, action.post];
      case "LOAD_POST":
      return action.posts;
    default:
      return state;
  }
};
function commentReducer(state = {}, action) {
 
  switch (action.type) {
    case "ADD_COMMENTS":
      if(!state[action.postId]){
        return {...state, [action.postId]: [action.comment]}
      }
      else{
        return {...state, [action.postId]: [...state[action.postId],action.comment]}
      }
      
        
    default:
      return state;
  }
};
const rootReducer=combineReducers({postReducer,commentReducer})
export default rootReducer;

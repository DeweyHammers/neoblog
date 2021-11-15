import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

export const LOADING_POSTS = "LOADING_POSTS";
export const RECEIVE_POSTS_DATA = "RECEIVE_POSTS_DATA";
export const receivePostsData = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_POSTS });
    axios
      .get(API)
      .then((json) =>
        dispatch({ type: RECEIVE_POSTS_DATA, payload: json.data })
      );
  };
};

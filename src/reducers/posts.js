import { RECEIVE_POSTS_DATA, LOADING_POSTS } from "../actions/posts";

const initstate = {
  data: [],
  isLoading: false,
  errors: false,
};

const posts = (state = initstate, action) => {
  switch (action.type) {
    case RECEIVE_POSTS_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case LOADING_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default posts;

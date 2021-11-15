import { RECEIVE_USERS_DATA, LOADING_USERS } from "../actions/users";

const initstate = {
  data: [],
  isLoading: false,
  errors: false,
};

const users = (state = initstate, action) => {
  switch (action.type) {
    case RECEIVE_USERS_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case LOADING_USERS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default users;

import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const LOADING_USERS = "LOADING_USERS";
export const RECEIVE_USERS_DATA = "RECEIVE_USERS_DATA";
export const receiveUsersData = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_USERS });
    axios
      .get(API)
      .then((json) =>
        dispatch({ type: RECEIVE_USERS_DATA, payload: json.data })
      );
  };
};

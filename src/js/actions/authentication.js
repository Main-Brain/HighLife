import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE
} from "./ActionTypes";
import axios from "axios";

export const login = (user_id, user_pw) => (dispatch) => {
  dispatch({ type: AUTH_LOGIN });

  return axios
    .post("/api/auth/login", { user_id, user_pw })
    .then(res => {
      if (res.data.result) {
        dispatch({
          type: AUTH_LOGIN_SUCCESS
        });

        return Promise.resolve(true);
      } else {
        dispatch({
          type: AUTH_LOGIN_FAILURE
        });

        return Promise.resolve(false);
      }
    })
    .catch(err => {
      console.warn(err);
    });
}
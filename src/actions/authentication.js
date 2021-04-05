import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE
} from "./ActionTypes";
import axios from "axios";

/* LOGIN */
export function loginRequest(user_id, user_pw) {
  return dispatch => {
    dispatch(login());

    return axios
      .post("/api/auth/login", { user_id, user_pw })
      .then(res => {
        if (res.data[0].status == 200) {
          dispatch(loginSuccess(user_id));
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };
}

export function login() {
  return {
    type: AUTH_LOGIN
  };
}

export function loginSuccess(user_id) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    user_id
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE
  };
}

/* REGISTER */
export function registerRequest(user_id, user_pw, user_name) {
  return dispatch => {
    // inform register API is starting
    dispatch(register());

    return axios
      .post("/api/auth/register", { user_id, user_pw, user_name })
      .then(res => {
        if (res.data[0].status == 200) {
          dispatch(registerSuccess());
        }
        // dispatch(registerFailure(error.response.data.code));
      })
      .catch(err => {
        console.warn(err);
      });
  };
}

export function register() {
  return {
    type: AUTH_REGISTER
  };
}

export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS
  };
}

export function registerFailure(error) {
  return {
    type: AUTH_REGISTER_FAILURE
  };
}

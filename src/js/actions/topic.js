import {
  TOPIC,
  TOPIC_SUCCESS,
  TOPIC_FAILURE
} from "./ActionTypes";
import axios from "axios";

/* LOGIN */
export function getTopic() {
  return dispatch => {
    dispatch(topic());

    return axios
      .post("/api/auth/login")
      .then(res => {
        if (res.data[0].status == 200) {
          dispatch(topicSuccess(user_id));
        } else {
          dispatch(topicFailure());
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };
}

export function topic() {
  return {
    type: TOPIC
  };
}

export function topicSuccess() {
  return {
    type: TOPIC_SUCCESS
  };
}

export function topicFailure() {
  return {
    type: TOPIC_FAILURE
  };
}
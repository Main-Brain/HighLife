import {
  TOPIC_LIST,
  TOPIC_LIST_SUCCESS,
  TOPIC_LIST_FAILURE
} from "./ActionTypes";
import axios from "axios";


export const topicList = () => (dispatch) => {
  dispatch({ type: TOPIC_LIST });

  return axios
    .get("/api/topic")
    .then(res => {
      if (res.data.result) {
        dispatch({
          type: TOPIC_LIST_SUCCESS,
          data: res.data.data
        });
      } else {
        dispatch({
          type: TOPIC_LIST_FAILURE
        });
      }
    })
    .catch(err => {
      console.warn(err);
    });
}
import {
  BOARD_LIST,
  BOARD_LIST_SUCCESS,
  BOARD_LIST_FAILURE
} from "./ActionTypes";
import axios from "axios";


export const boardList = (board_idx=false) => (dispatch) => {
  let url = "/api/board";
  if (board_idx) {
    url += "?board_idx=" + board_idx
  }
  dispatch({ type: BOARD_LIST });

  return axios
    .get(url)
    .then(res => {
      if (res.data.result) {
        dispatch({
          type: BOARD_LIST_SUCCESS,
          data: res.data.data
        });
      } else {
        dispatch({
          type: BOARD_LIST_FAILURE
        });
      }
    })
    .catch(err => {
      console.warn(err);
    });
}
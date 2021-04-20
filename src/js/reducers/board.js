import * as types from "@/actions/ActionTypes";
import update from "react-addons-update";

const initialState = {
  list: {
      status: 'INIT',
      data: []
  }
};

export default function topic(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case types.BOARD_LIST:
      return update(state, {
        list: {
          status: { $set: "WAITING" }
        }
      });
    case types.BOARD_LIST_SUCCESS:
      return update(state, {
        list: {
          status: { $set: 'SUCCESS' },
          data: { $set: data }
        }
      });
    case types.BOARD_LIST_FAILURE:
      return update(state, {
        list: {
          status: { $set: "FAILURE" }
        }
      });
    default:
      return state;
  }
}

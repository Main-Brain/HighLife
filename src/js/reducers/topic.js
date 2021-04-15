import * as types from "@/actions/ActionTypes";
import update from "react-addons-update";

const initialState = {
  topic: {
    status: "INIT"
  },
  status: {
    valid: false
  }
};

export default function topic(state, action) {
  if (typeof state === "undefined") state = initialState;

  switch (action.type) {
    case types.TOPIC:
      return update(state, {
        topic: {
          status: { $set: "WAITING" }
        }
      });
    case types.TOPIC_SUCCESS:
      return update(state, {
        topic: {
          status: { $set: "SUCCESS" }
        },
        status: {
          isLoggedIn: { $set: true },
          currentUser: { $set: action.user_id }
        }
      });
    case types.TOPIC_FAILURE:
      return update(state, {
        topic: {
          status: { $set: "FAILURE" }
        }
      });
    default:
      return state;
  }
}

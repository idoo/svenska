import { handleActions } from "redux-actions";
// import { SET_IMAGE } from "../actions";

const INITIAL_STATE = { image: null };

const imageReducer = handleActions(
  {
    SET_IMAGE: (_state, action) => {
      console.log(action);
      return action.image || INITIAL_STATE;
    }
  },
  INITIAL_STATE
);
export { imageReducer, INITIAL_STATE };

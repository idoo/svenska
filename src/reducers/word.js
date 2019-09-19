import { handleActions } from "redux-actions";

const INITIAL_STATE = { se: null, en: null };

const wordReducer = handleActions(
  {
    SET_WORD: (_state, action) => {
      return action.word || INITIAL_STATE;
    }
  },
  INITIAL_STATE
);
export { wordReducer, INITIAL_STATE };

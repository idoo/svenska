import { combineReducers } from "redux";
import { wordReducer } from "./word";
import { imageReducer } from "./image";

const reducer = combineReducers({
  word: wordReducer,
  image: imageReducer
});

export { reducer };

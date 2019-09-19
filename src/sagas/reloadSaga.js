import { delay, put } from "redux-saga/effects";
import { fetchWord } from "../actions";

const DELAY = 4000000;

function* reloadSaga() {
  try {
    while (true) {
      yield put(fetchWord());
      yield delay(DELAY);
    }
  } catch (e) {
    console.warn(e);
  }
}

export default reloadSaga;

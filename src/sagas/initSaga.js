import { fork } from "redux-saga/effects";
import reloadSaga from "./reloadSaga";

function* initSaga() {
  yield fork(reloadSaga);
}

export default initSaga;

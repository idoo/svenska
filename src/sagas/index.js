import { all, takeEvery, takeLatest } from "redux-saga/effects";

import fetchWordSaga from "./fetchWordSaga";
import fetchImageSaga from "./fetchImageSaga";
import initSaga from "./initSaga";

import { INIT, FETCH_WORD, GET_IMAGE } from "../actions";

export default function* rootSaga() {
  yield all([
    yield takeEvery(INIT, initSaga),
    yield takeEvery(FETCH_WORD, fetchWordSaga),
    yield takeLatest(GET_IMAGE, fetchImageSaga)
  ]);
}

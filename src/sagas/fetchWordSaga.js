import { put } from "redux-saga/effects";
import { getImage, setWord } from "../actions";
import { WORDS } from "../words";

function* fetchWordSaga() {
  try {
    const wordOfTheDay = WORDS[Math.floor(Math.random() * WORDS.length)];
    yield put(setWord(wordOfTheDay));
    yield put(getImage(wordOfTheDay["en"]));
  } catch (e) {
    console.warn(e);
  }
}

export default fetchWordSaga;

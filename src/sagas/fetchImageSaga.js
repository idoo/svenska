import { put, call } from "redux-saga/effects";
import { setImage } from "../actions";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "JKOJ5Y892R5S";

const URL = `https://api.tenor.com/v1/search?key=${API_KEY}&limit=1&q=`;

// const URL =
//   "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=";

function* fetchImageSaga({ word }) {
  const image = yield call(fetchImageURL, word);
  yield put(setImage(image));
}

export default fetchImageSaga;

async function fetchImageURL(word) {
  const response = await fetch(proxyUrl + `${URL}${word}`).then(response => {
    return response.json().then(body => {
      // console.log(body);
      return body["results"][0]["media"][0]["nanogif"]["url"];
    });
  });
  return response;
}

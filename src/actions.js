export const INIT = "INIT";
export const SET_WORD = "SET_WORD";
export const SET_IMAGE = "SET_IMAGE";
export const GET_IMAGE = "GET_IMAGE";
export const FETCH_WORD = "FETCH_WORD";

export const init = () => ({ type: INIT });
export const setWord = word => ({ type: SET_WORD, word });
export const fetchWord = () => ({ type: FETCH_WORD });
export const getImage = word => ({ type: GET_IMAGE, word });
export const setImage = image => ({ type: SET_IMAGE, image });

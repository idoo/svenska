import React from "react";
import { applyMiddleware, createStore, compose } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import saga from "./sagas";
import App from "./App";
// import { setWord } from "./actions";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

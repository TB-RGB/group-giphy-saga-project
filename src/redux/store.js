import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* rootSaga() {}

const sagaMiddleware = createSagaMiddleware();

const favoriteList = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(
    combineReducers({
        favoriteList
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";


function* rootSaga() {
  yield takeLatest("FETCH_SEARCH", fetchSearch);
  yield takeLatest("FETCH_FAVORITES", fetchFavorites);
  yield takeLatest("SEND_FAVORITE", sendFavorite);
  yield takeLatest("SET_CATEGORY", setCategory);
  yield takeLatest("DROP_FAVORITE", dropFavorite);
  yield takeLatest("FETCH_CATEGORIES", fetchCategories);
}
const apiKey = import.meta.env.VITE_GIPHY_API_KEY
function* fetchSearch(action) {
  try {
  
    const searchResponse = yield axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: apiKey,
        q: action.payload,
      },
    });

    yield put({ type: "SET_SEARCH", payload: searchResponse.data });
  } catch (err) {
    console.log("Error in search GET request", err);
  }
}

function* fetchFavorites(action) {
  try {
    const favoritesResponse = yield axios("/api/favorites");
    yield put({ type: "ADD_FAVORITE", payload: action.payload });
  } catch (err) {
    console.log("Error in fetching favorites", err);
  }
}

function* sendFavorite(action) {
  try {
    yield axios.post("/api/favorites", action.payload);
    yield put({ type: "FETCH_FAVORITES" });
  } catch (err) {
    console.log("Error in posting favorite", err);
  }
}

function* setCategory(action) {
  try {
    yield axios.put(
      `/api/favorites${action.payload.id}`,
      action.payload.categoryId
    );
    yield put({ type: "FETCH_FAVORITES" });
  } catch (err) {
    console.log("error in favorites PUT request", err);
  }
}

function* dropFavorite(action) {
  try {
    yield axios.delete(`/api/favorites/${action.payload}`);
    yield put({ type: "FETCH_FAVORITES" });
  } catch (err) {
    console.log("Error in favorites delete request", err);
  }
}

function* fetchCategories(action) {
  try {
    const categoriesResponse = yield axios("/api/categories");
    yield put({ type: "SET_CATEGORIES", payload: categoriesResponse.data });
  } catch (err) {
    console.log("Error in categories GET request", err);
  }
}

const sagaMiddleware = createSagaMiddleware();

const favoriteList = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return action.payload;
    default:
      return state;
  }
};

const searchResults = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    favoriteList,
    searchResults,
    categories,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;

import { createStore } from "redux";
import rootReducer from "../reducers";

const loadState = () => {
  try {
    const state = localStorage.getItem("state");
    // console.log(state);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const newState = JSON.stringify(state);
    localStorage.setItem("state", newState);
  } catch {
    // ignore write errors
  }
};

const persistStore = loadState();

const store = createStore(rootReducer, persistStore);

store.subscribe(() => {
  saveState({
    board: store.getState().board,
  });
});

export default store;

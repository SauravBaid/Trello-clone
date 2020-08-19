import { combineReducers } from "redux";
import listReducers from "./listReducers";
import cardReducers from "./cardReducers";

export default combineReducers({
  board: listReducers,
});

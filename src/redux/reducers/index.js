import { combineReducers } from "redux";
import { robotReducer } from "./robotReducer";

const rootReducer = combineReducers({
  robotList: robotReducer,
});

export default rootReducer;

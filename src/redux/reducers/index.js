import { combineReducers } from "redux";
import { oneRobotReducer, robotReducer } from "./robotReducer";

const rootReducer = combineReducers({
  robots: robotReducer,
  robot: oneRobotReducer,
});

export default rootReducer;

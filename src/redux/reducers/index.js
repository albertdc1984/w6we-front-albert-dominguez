import { combineReducers } from "redux";
import {
  deleteOneRobotReducer,
  oneRobotReducer,
  robotReducer,
} from "./robotReducer";

const rootReducer = combineReducers({
  robots: robotReducer,
  robot: oneRobotReducer,
  robotDelete: deleteOneRobotReducer,
});

export default rootReducer;

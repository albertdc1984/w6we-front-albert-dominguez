import { actionTypes } from "../actions/actionTypes";

export const robotReducer = (currentRobots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = action.robots;
      break;

    default:
      newRobots = [...currentRobots];
      break;
  }

  return newRobots;
};

export const oneRobotReducer = (currentRobot = {}, action = {}) => {
  let newRobot;
  switch (action.type) {
    case actionTypes.loadOneRobot:
      newRobot = { ...action.robot };
      break;

    default:
      newRobot = { ...currentRobot };
  }
  return newRobot;
};

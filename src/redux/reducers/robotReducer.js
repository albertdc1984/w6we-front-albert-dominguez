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
  let newRobots;
  switch (action.type) {
    case actionTypes.loadOneRobot:
      newRobots = { ...action.robot };
      break;

    default:
      newRobots = { ...currentRobot };
  }
  return newRobots;
};

export const deleteOneRobotReducer = (currentRobot = {}, action = {}) => {
  let newRobots;
  switch (action.type) {
    case actionTypes.deleteOneRobot:
      newRobots = currentRobot.filter((robot) => action.id !== robot.id);
      break;

    default:
      newRobots = { ...currentRobot };
  }
  return newRobots;
};

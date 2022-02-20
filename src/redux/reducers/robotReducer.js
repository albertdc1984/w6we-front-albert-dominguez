import { actionTypes } from "../actions/actionsCreator";

export const robotReducer = (robots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = action.robots;
      break;

    default:
      newRobots = [...robots];
      break;
  }

  return newRobots;
};

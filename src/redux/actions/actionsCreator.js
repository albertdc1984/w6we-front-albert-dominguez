import { actionTypes } from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadOneRobotAction = (robot) => ({
  type: actionTypes.loadOneRobot,
  robot,
});
export const deleteOneRobotAction = (robot) => ({
  type: actionTypes.deleteOneRobot,
  robot,
});

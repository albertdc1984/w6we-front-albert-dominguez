import { actionTypes } from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadOneRobotAction = (robot) => ({
  type: actionTypes.loadOneRobot,
  robot,
});

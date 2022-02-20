import { actionTypes } from "./actionTypes";

export const loadRobots = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

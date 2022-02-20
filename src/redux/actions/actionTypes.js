import { actionTypes } from "./actionsCreator";

export const loadRobots = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

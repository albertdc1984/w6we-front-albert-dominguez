import { actionTypes } from "./actionsCreator";

export const loadTasks = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

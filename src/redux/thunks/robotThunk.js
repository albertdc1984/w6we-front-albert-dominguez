import { loadRobotsAction } from "../actions/actionsCreator";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();

  if (!response.ok) return;
  dispatch(loadRobotsAction(robots.robots));
};

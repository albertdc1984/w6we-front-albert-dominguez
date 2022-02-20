import {
  loadOneRobotAction,
  loadRobotsAction,
  deleteOneRobotAction,
} from "../actions/actionsCreator";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();

  if (!response.ok) return;
  dispatch(loadRobotsAction(robots.robots));
};
export const loadOneRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
  const robot = await response.json();

  dispatch(loadOneRobotAction(robot));
};

export const deleteOneRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/delete/${id}`,
    { method: "delete" }
  );
  const robot = await response.json();

  dispatch(deleteOneRobotAction(robot));
};

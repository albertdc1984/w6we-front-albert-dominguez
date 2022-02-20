import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunks/robotThunk";
import Robot from "../Robot/Robot";

export const RobotList = () => {
  const robots = useSelector((state) => state.robots);
  console.log(robots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <>
      {robots.map((robot) => (
        <Robot robot={robot} key={robot.id} />
      ))}
    </>
  );
};

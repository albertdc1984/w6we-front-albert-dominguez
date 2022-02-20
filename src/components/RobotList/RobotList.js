import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunks/robotThunk";
import Robot from "../Robot/Robot";
import "./RobotList.css";

export const RobotList = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <div className="robot-list-container">
      {robots.map((robot) => (
        <Robot robot={robot} key={robot._id} />
      ))}
    </div>
  );
};

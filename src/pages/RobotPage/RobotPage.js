import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RobotDetail from "../../components/RobotDetail/RobotDetail";
import { loadOneRobotThunk } from "../../redux/thunks/robotThunk";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const RobotPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const robot = useSelector((state) => state.robot);
  console.log(robot);

  useEffect(() => {
    dispatch(loadOneRobotThunk(id));
  }, [dispatch, id]);

  return robot._id ? (
    <>
      <h1>THE ROBOTS</h1>
      <RobotDetail robot={robot} />
    </>
  ) : (
    <NotFoundPage />
  );
};
export default RobotPage;

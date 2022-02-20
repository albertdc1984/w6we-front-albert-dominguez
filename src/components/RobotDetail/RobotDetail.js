import "./RobotDetail.css";

const RobotDetail = ({ robot }) => {
  return (
    <div className="main-robot-detail-container">
      <div className="robot-detail-container">
        <div className="robot-detail-image-container">
          <img src={robot.image} alt={robot.name} />
        </div>
        <h2 className="robot-name">{robot.name}</h2>
        <ul className="robot-attributes">
          <li>Velocity: {robot.velocity}</li>
          <li>Resistance:{robot.resistance}</li>
          <li>Year:{robot.year}</li>
        </ul>
      </div>
    </div>
  );
};
export default RobotDetail;

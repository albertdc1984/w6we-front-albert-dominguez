import "./Robot.css";

const Robot = ({ robot }) => {
  return (
    <div className="robot-container">
      <div className="robot-image-container">
        <img src={robot.image} alt={robot.name} />
      </div>
      <h2 className="robot-name">{robot.name}</h2>
      <ul className="robot-attributes">
        <li>Velocity: {robot.velocity}</li>
        <li>Resistance:{robot.resistance}</li>
        <li>Year:{robot.year}</li>
      </ul>
    </div>
  );
};
export default Robot;

import "./App.css";
import RobotDetail from "./components/RobotDetail/RobotDetail";

import { RobotList } from "./components/RobotList/RobotList";

const fakeRobot = {
  _id: "621145058f8f1a4e0bc56905",
  image:
    "https://i0.wp.com/theelectricagora.com/wp-content/uploads/2016/06/astro_boy1.jpg?fit=688%2C712&ssl=1",
  velocity: 10,
  resistance: 10,
  year: 1952,
  name: "Astroboy",
};
function App() {
  return (
    <div className="App">
      <h1>ROBOTS</h1>
      <RobotList />
      <RobotDetail robot={fakeRobot} />
    </div>
  );
}

export default App;

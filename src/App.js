import "./App.css";
import Robot from "./components/Robot/Robot";

const fakeRobot = {
  image:
    "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
  velocity: 10,
  resistance: 10,
  year: 1980,
  name: "Arale",
};

function App() {
  return (
    <div className="App">
      <h1>ROBOTS</h1>
      <Robot robot={fakeRobot} />
    </div>
  );
}

export default App;

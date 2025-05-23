import { Link, Outlet } from "react-router";
import { GameProvider } from "./Context/GameContext";
import './App.css';

function App() {
  return (
    <>
    <GameProvider>
      <Outlet />
    </GameProvider>
    <Link to="/About">
    <button className="about" type="button">About</button>
</Link>
    </>
  );
}

export default App;

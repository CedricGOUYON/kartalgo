import { Outlet } from "react-router";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    <GameProvider>
      <Outlet />
    </GameProvider>
  );
}

export default App;

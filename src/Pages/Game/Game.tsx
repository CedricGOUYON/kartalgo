import "./Game.css";
import Animations from "../../components/animations/Animations";
import Questions from "../../components/questions/Questions";

function Game() {
  return (
    <>
      <section className="gameContainer">
        <div className="questions">
          <Questions />
        </div>
        <div className="animation">
          <Animations />
        </div>
      </section>
    </>
  );
}
export default Game;

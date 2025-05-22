import { Link } from "react-router";
import "./Game.css";
import Animations from "../../components/animations/Animations";
import Questions from "../../components/questions/Questions";

function Game() {
  return (
    <>
      <section className="gameContainer">
        <div className="questions">
          <Questions />
          <Link to="/">
            <button className="go-button">Acceuil</button>
          </Link>
        </div>
        <div>
          <Animations />
        </div>
      </section>
    </>
  );
}
export default Game;

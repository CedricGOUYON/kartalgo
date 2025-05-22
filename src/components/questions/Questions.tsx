import "./Questions.css";
import { useEffect, useState, useRef } from "react";

import { useGame } from "../../Context/GameContext";

function Questions() {
  const [isChrono, setIsChrono] = useState(true);
  const [chrono, setChrono] = useState(0); // en secondes
  const timerRef = useRef(null);
  const { currentQuestion, setCurrentQuestion, allQuestions, score, setScore } = useGame();

  function handleClick(option: string, id: number) {
    if (option === currentQuestion.answer) {
      setCurrentQuestion(allQuestions[id]);
      const newScore = score + 1;
      //console.log(newScore);

      setScore(newScore);
    }
  }

  // Démarre le chrono au montage
  useEffect(() => {
    if (isChrono) {
      timerRef.current = setInterval(() => {
        setChrono((prev) => prev + 1);
      }, 1000);
    }

    // Nettoyage si le composant est démonté
    return () => clearInterval(timerRef.current);
  }, [isChrono]);

  // Arrête le chrono quand score atteint 8
  useEffect(() => {
    if (score >= 8) {
      clearInterval(timerRef.current);
      setIsChrono(false);
    }
  }, [score]);

  return (
    <>
      <h2 className="timer">{currentQuestion.question}</h2>

      <ul>
        {currentQuestion.options.map((option) => (
          <button onClick={() => handleClick(option, currentQuestion.id)} type="button" key={option}>
            {option}
          </button>
        ))}
      </ul>
      <section>
        <p>Votre score</p>
        <article className="timer">{score}</article>
        <p>Votre temps en seconde</p>
        <article className="timer">{chrono}</article>
      </section>
    </>
  );
}
export default Questions;

import "./Questions.css";

import { useGame } from "../../Context/GameContext";

function Questions() {
  const { currentQuestion, setCurrentQuestion, allQuestions, score, setScore } = useGame();

  function handleClick(option: string, id: number) {
    if (option === currentQuestion.answer) {
      setCurrentQuestion(allQuestions[id++]);
      const newScore = score + 1;
      setScore(newScore);
    }
  }

  return (
    <div className="question-container">
      <h2>{currentQuestion.question}</h2>

      <ul>
        {currentQuestion.options.map((option) => (
          <button onClick={() => handleClick(option, currentQuestion.id)} type="button" key={option}>
            {option}
          </button>
        ))}
      </ul>
      <section>
        <article>{score}</article>
        <article>Timer</article>
      </section>
    </div>
  );
}
export default Questions;

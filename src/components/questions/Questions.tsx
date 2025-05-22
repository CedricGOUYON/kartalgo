import "./Questions.css";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { useGame } from "../../Context/GameContext";

const allScore = JSON.parse(localStorage.getItem("allScore") || "[]");

function Questions() {

	const [isPop, setIsPop] = useState(false);
	const [isChrono, setIsChrono] = useState(true);
	const [chrono, setChrono] = useState(0); // en secondes
	const [currentName, setCurrentName] = useState("");
	const timerRef = useRef(null);
	const { currentQuestion, setCurrentQuestion, allQuestions, score, setScore } =
		useGame();

	function handleClick(option: string, id: number) {
		if (option === currentQuestion.answer) {
			setCurrentQuestion(allQuestions[id]);
			const newScore = score + 1;
			setScore(newScore);
		} else {
			const newChrono = chrono + 5;
			setChrono(newChrono);
		}
	}

	function handleName(e: React.ChangeEvent<HTMLInputElement>) {
		setCurrentName(e.target.value);
	}

	function handleOk() {
		const newUserScore = {
			name: currentName,
			score: chrono,
		};
		if (allScore) {
			allScore.push(newUserScore);
			localStorage.setItem("allScore", JSON.stringify(allScore));
		}
		setIsPop(false);
	}

	console.log(isPop);

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
			setIsPop(true);
		}
	}, [score]);

	useEffect(() => {
		setIsPop(false);
	}, []);

	return (
		<>
			<div className="question-container">
				<h2>{currentQuestion.question}</h2>

				<ul>
					{currentQuestion.options.map((option) => (
						<button
							onClick={() => handleClick(option, currentQuestion.id)}
							type="button"
							key={option}
						>
							{option}
						</button>
					))}
				</ul>
				<section>
					<article className="score">{score}</article>
					<article className="timer">{chrono}</article>
				</section>
			</div>
			{isPop ? (
				<div className="popup">
					<h1 id="congrat" className="congratulation">
						Congratulation !!
					</h1>
					<div id="temp" className="congratulation">
						Ton temps est de : {chrono} secondes
					</div>

					<input
						value={currentName}
						onChange={handleName}
						id="name"
						placeholder="Entrez votre nom"
						type="text"
					/>
					<Link to="/classement">
						<button onClick={() => handleOk()} id="ok" type="button">
							Ok
						</button>
					</Link>
				</div>
			) : null}
		</>
	);

}
export default Questions;

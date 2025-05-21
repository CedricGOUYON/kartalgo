import "./Questions.css";
import { useState } from "react";

const dataBase = [
	{
		id: 1,
		question: "What is the capital of France?",
		options: ["Marseille", "Nantes", "Grenoble", "Paris"],
		answer: "Paris",
	},
];

function Questions() {
	const [currentQuestion, setCurrentQuestion] = useState(dataBase[0]);

	return (
		<div className="question-container">
			<h2>{currentQuestion.question}</h2>
			<ul>
				{currentQuestion.options.map((option) => (
					<button type="button" key={option}>
						{option}
					</button>
				))}
			</ul>
		</div>
	);
}
export default Questions;

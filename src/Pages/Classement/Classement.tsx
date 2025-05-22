import { Link } from "react-router";

function Classement() {
	const allScore = JSON.parse(localStorage.getItem("allScore") || "[]");
	console.log(allScore);
	allScore.sort((a, b) => a.score - b.score);
	return (
		<>
			{allScore.map((user: { name: string; score: number }, index: number) => (
				<div key={index} className="classement">
					{index + 1} : {user.name} : {user.score} secondes
				</div>
			))}
			<Link to="/">
				<button type="button">Acceuil</button>
			</Link>
		</>
	);
}

export default Classement;

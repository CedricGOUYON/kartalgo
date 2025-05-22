import { Link } from "react-router";
import "./home.css";

function Home() {
	return (
		<div className="home">
			<h1>🏁 Kart algo!</h1>
			<h2>🏁 Kart algo!</h2>
			<Link to="/game">
				<button>GO !</button>
			</Link>
			<Link to="/login">
				<button>Inscris-toi / Connecte-toi</button>
			</Link>
		</div>
	);
}

export default Home;

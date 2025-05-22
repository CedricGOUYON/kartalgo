import "./Animations.css";
import kart from "../../assets/kart-one.png";
import { useState } from "react";

const stylePos1 = {
	position: "relative",
	top: "55%",
	left: "88%",
	rotate: "90deg",
};
function Animations() {
	const [posKart, setPosKart] = useState(0);
	return (
		<div className="animation">
			<img style={stylePos1} className="kart" src={kart} alt="" />
		</div>
	);
}
export default Animations;

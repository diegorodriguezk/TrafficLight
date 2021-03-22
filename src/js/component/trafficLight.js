import React, { useState, useEffect } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("");
	const selectLight = e => {
		setColor(e.target.id);
	};

	return (
		<div>
			<div id="traffic-top"> </div>
			<div id="container">
				<div
					id="red"
					className={`red light ${color == "red" ? " active" : ""}`}
					onClick={selectLight}>
					{color}{" "}
				</div>
				<div
					id="yellow"
					className={`yellow light ${
						color == "yellow" ? " active" : ""
					}`}
					onClick={selectLight}>
					{color}{" "}
				</div>
				<div
					id="green"
					className={`
						green light ${color == "green" ? " active" : ""}`}
					onClick={selectLight}>
					{color}{" "}
				</div>
			</div>
		</div>
	);
};
export default TrafficLight;

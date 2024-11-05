import React, { useEffect, useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [color, setColor] = useState('')
	console.log(color)
	return (
		<div id="app">
			<div className="container bg-secondary">
				<div className="trafficTop"></div>
				<div className="trafficLights">
					<div className={`light red ${color === 'red' ? 'glow' : ' '}`} onClick={() => setColor('red')}></div>
					<div className={`light yellow ${color === 'yellow' ? 'glow' : ' '}`} onClick={() => setColor('yellow')}></div>
					<div className={`light green ${color === 'green' ? 'glow' : ' '}`} onClick={() => setColor('green')}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;

import { useState } from 'react'
import SlideBar from './SlideBar'
import ColorPanel from './ColorPanel'
import Results from './Results';

const getRandomRgb = () => Math.floor(Math.random() * 256);

const question = {
	r: getRandomRgb(),
	g: getRandomRgb(),
	b: getRandomRgb()
};

const calculateDistance = (p1, p2) => Math.sqrt((p1.r - p2.r)**2 + (p1.g - p2.g)**2 + (p1.b - p2.b)**2);

function GameContainer({ colorMode, difficulty}) {
  const [userR, setUserR] = useState(0)
  const [userG, setUserG] = useState(0)
  const [userB, setUserB] = useState(0)
	const [score, setScore] = useState(null);

	function calculateResult() {
		const distance = calculateDistance(question, {r: userR, g: userG, b: userB});
		const result = (1 - distance / Math.sqrt(195075)) * 100; // 255^2 + 255^2 + 255^2 = 195075
		setScore(result);
	}

	return (
		<div>
			<div style={{display: 'flex'}}>
				<ColorPanel colorMode={colorMode} r={question.r} g={question.g} b={question.b} />
				{difficulty === 'easy' && <ColorPanel colorMode={colorMode} r={userR} g={userG} b={userB}  />}
			</div>
			{	score === null ?
				<div>
					<SlideBar label='Red' value={userR} handleChange={e => setUserR(e.target.value)} />
					<SlideBar label='Green' value={userG} handleChange={e => setUserG(e.target.value)} />
					<SlideBar label='Blue' value={userB} handleChange={e => setUserB(e.target.value)} />
					<button onClick={calculateResult}>Confirm</button>
				</div>
				:
				<Results score={score} />
			}
		</div>
	);
}
export default GameContainer;
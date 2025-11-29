import { useState } from 'react'
import SlideBar from './SlideBar'
import ColorPanel from './ColorPanel'
import Results from './Results';

const getRandomValue = max => Math.floor(Math.random() * max);

const generateQuestion = (colorMode) => 
	colorMode === 'rgb'
	? [getRandomValue(256), getRandomValue(256), getRandomValue(256)]
	: [getRandomValue(361), getRandomValue(101), getRandomValue(101)];

const calculateDistance = (p1, p2) => Math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2 + (p1[2] - p2[2])**2);

function GameContainer({ colorMode, difficulty, endGame}) {
	const [question, setQuestion] = useState(() => generateQuestion(colorMode));
	const [score, setScore] = useState(null);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
	
	const userAnswer = [value1, value2, value3];
	const setUserAnswer = [setValue1, setValue2, setValue3];

	const labels = colorMode === 'rgb' ? ['Red', 'Green', 'Blue'] : ['Hue', 'Saturation', 'Lightness'];
  const maxValues = colorMode === 'rgb' ? [255, 255, 255] : [360, 100, 100];

	// result for RGB mode
	function calculateResult() {
		const distance = calculateDistance(question, userAnswer);
		const result = (1 - distance / Math.sqrt(195075)) * 100; // 255^2 + 255^2 + 255^2 = 195075
		setScore(result);
	}

	return (
		<div>
			<div style={{display: 'flex'}}>
				<ColorPanel colorMode={colorMode} colorValues={question} />
				{(difficulty === 'easy' || score !== null) && <ColorPanel colorMode={colorMode} colorValues={userAnswer}  />}
			</div>
			{	score === null ?
				<div>
					{labels.map((label, i) => (
						<SlideBar label={label} max={maxValues[i]} value={userAnswer[i]} handleChange={e => setUserAnswer[i](e.target.value)} />
					))}
					<button onClick={calculateResult}>Confirm</button>
				</div>
				:
				<Results colorMode={colorMode} score={score} endGame={endGame} question={question} answer={userAnswer} />
			}
		</div>
	);
}
export default GameContainer;
import { useState } from 'react'
import SlideBar from './SlideBar'
import ColorPanel from './ColorPanel'
import Results from './Results';

const getRandomValue = max => Math.floor(Math.random() * max);

const generateQuestion = colorMode => 
	colorMode === 'rgb'
	? [getRandomValue(256), getRandomValue(256), getRandomValue(256)]
	: [getRandomValue(360), getRandomValue(101), getRandomValue(101)];

const calcDistSq = (p1, p2) => (p1[0] - p2[0])**2 + (p1[1] - p2[1])**2 + (p1[2] - p2[2])**2;

const hslToRgb = input => {
	let [hue, saturation, lightness] = input;
	hue = hue % 360;
	saturation *= 0.01;
	lightness *= 0.01;
	const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
	const h = hue / 60;
	const x = chroma * (1 - Math.abs(h % 2 - 1));

	let temp;
	if (h < 1) {
		temp = [chroma, x, 0];
	} else if (h < 2) {
		temp = [x, chroma, 0];
	} else if (h < 3) {
		temp = [0, chroma, x];
	} else if (h < 4) {
		temp = [0, x, chroma];
	} else if (h < 5) {
		temp = [x, 0, chroma];
	} else {
		temp = [chroma, 0, x];
	}

	const m = lightness - chroma / 2;
	const output = temp.map(element => Math.round((element + m) * 255));

	return output;
}

function GameContainer({ colorMode, difficulty, endGame}) {
	const [question, setQuestion] = useState(() => generateQuestion(colorMode));
	const [score, setScore] = useState(null);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
	
	const userAnswer = [value1, value2, value3];
	const setUserAnswer = [setValue1, setValue2, setValue3];

	const labels = colorMode === 'rgb' ? ['Red', 'Green', 'Blue'] : ['Hue', 'Saturation', 'Lightness'];
  const maxValues = colorMode === 'rgb' ? [255, 255, 255] : [359, 100, 100];

	// calculate the distance between two points in the RGB model
	function calculateResult() {
		const questionRgb = colorMode === 'rgb' ? question : hslToRgb(question);
		const userAnswerRgb = colorMode === 'rgb' ? userAnswer : hslToRgb(userAnswer);
		const distSq = calcDistSq(questionRgb, userAnswerRgb);
		const result = (1 - Math.sqrt(distSq / 195075)) * 100; // 255^2 + 255^2 + 255^2 = 195075
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
						<SlideBar key={i} label={label} max={maxValues[i]} value={userAnswer[i]} handleChange={e => setUserAnswer[i](e.target.value)} />
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
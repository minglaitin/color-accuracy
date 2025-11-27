import { useState } from 'react'
import SlideBar from './SlideBar'
import ColorPanel from './ColorPanel'

const getRandomRgb = () => Math.floor(Math.random() * 256);

const questionR = getRandomRgb();
const questionG = getRandomRgb();
const questionB = getRandomRgb();

function GameContainer({ colorMode, difficulty}) {
  const [userR, setUserR] = useState(0)
  const [userG, setUserG] = useState(0)
  const [userB, setUserB] = useState(0)

	return (
		<div>
			<div style={{display: 'flex'}}>
				<ColorPanel colorMode={colorMode} r={questionR} g={questionG} b={questionB} />
				{difficulty === 'easy' && <ColorPanel colorMode={colorMode} r={userR} g={userG} b={userB}  />}
			</div>
      <SlideBar label='Red' value={userR} handleChange={e => setUserR(e.target.value)} />
      <SlideBar label='Green' value={userG} handleChange={e => setUserG(e.target.value)} />
      <SlideBar label='Blue' value={userB} handleChange={e => setUserB(e.target.value)} />
			<button>Confirm</button>
		</div>
	);
}
export default GameContainer;
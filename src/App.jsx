import { useState } from 'react'
import './App.css'
import TitleScreen from './TitleScreen';
import GameContainer from './GameContainer'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [colorMode, setColorMode] = useState('rgb');
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <>
      { gameStarted ? 
        <GameContainer colorMode={colorMode} difficulty={difficulty} /> 
        : 
        <TitleScreen colorMode={colorMode} setColorMode={setColorMode} difficulty={difficulty} setDifficulty={setDifficulty} setGameStarted={setGameStarted} />
      }
    </>
  )
}

export default App

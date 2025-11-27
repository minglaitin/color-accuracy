const selectedButtonStyle = {
  backgroundColor: 'lavender'
};

function TitleScreen({ colorMode, setColorMode, difficulty, setDifficulty, setGameStarted }) {
  return (
    <>
      <h1>Test Your Color Accuracy</h1>
      <div className='color-mode-container'>
        <button onClick={() => setColorMode('rgb')} style={colorMode === 'rgb' ? selectedButtonStyle : {}}>RGB</button>
        <button onClick={() => setColorMode('hsl')} style={colorMode === 'hsl' ? selectedButtonStyle : {}}>HSL</button>
      </div>
      <div className='difficulty-container'>
        <button onClick={() => setDifficulty('easy')} style={difficulty === 'easy' ? selectedButtonStyle : {}}>Easy</button>
        <button onClick={() => setDifficulty('hard')} style={difficulty === 'hard' ? selectedButtonStyle : {}}>Hard</button>
      </div>
      <button onClick={() => setGameStarted(true)}>Start</button>
    </>
  );
}

export default TitleScreen;
const formatNumber = num => new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"}).format(num);

function Results({colorMode, score, endGame, question, answer}) {
  const diff = [formatNumber(answer[0] - question[0]), formatNumber(answer[1] - question[1]), formatNumber(answer[2] - question[2])]
  const labels = colorMode === 'rgb' ? ['R', 'G', 'B'] : ['H', 'S', 'L'];

  return (
    <div>
      <p>Correct answer:{labels.map((label, i) => ` ${label} ${question[i]}`)}</p>
      <p>Your answer:{labels.map((label, i) => ` ${label} ${answer[i]}`)}</p>
      <p>Difference:{labels.map((label, i) => ` ${label} ${diff[i]}`)}</p>
      <p>Your accuracy: {score.toFixed(2)}%</p>
      <button onClick={endGame}>Replay</button>
    </div>
  );
}

export default Results;
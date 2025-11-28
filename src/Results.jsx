const formatNumber = num => new Intl.NumberFormat("en-US", {signDisplay: "exceptZero"}).format(num);

function Results({score, endGame, question, answer}) {
  return (
    <>
      <p>Correct answer: R {question.r} G {question.g} B {question.b}</p>
      <p>Your answer: R {answer.r} G {answer.g} B {answer.b}</p>
      <p>Difference: R {formatNumber(answer.r - question.r)} G {formatNumber(answer.g - question.g)} B {formatNumber(answer.b - question.b)}</p>
      <p>Your accuracy: {score.toFixed(2)}%</p>
      <button onClick={endGame}>Replay</button>
    </>
  );
}

export default Results;
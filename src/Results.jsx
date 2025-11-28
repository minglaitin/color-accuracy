function Results({score}) {

  return (
    <>
      <p>Your accuracy is {score.toFixed(2)}%.</p>
      <button>Replay</button>
    </>
  );
}

export default Results;
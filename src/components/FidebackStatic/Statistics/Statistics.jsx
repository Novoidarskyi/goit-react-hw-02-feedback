const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div> 
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback: {good > 0 ? positivePercentage.toFixed(2) : 0}%;
      </p>
    </div>
  );
}

export default Statistics;

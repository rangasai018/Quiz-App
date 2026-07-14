function Result({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100)

  const getMessage = () => {
    if (percentage === 100) return 'Perfect score! You nailed it!'
    if (percentage >= 80) return 'Great job! You really know your stuff.'
    if (percentage >= 60) return 'Good effort! Keep learning and improving.'
    if (percentage >= 40) return 'Not bad! A bit more practice will help.'
    return 'Keep studying — you\'ll get there!'
  }

  const getGradeClass = () => {
    if (percentage >= 80) return 'grade-excellent'
    if (percentage >= 60) return 'grade-good'
    if (percentage >= 40) return 'grade-fair'
    return 'grade-poor'
  }

  return (
    <div className="result">
      <div className={`result-score ${getGradeClass()}`}>
        <span className="score-value">{percentage}%</span>
        <span className="score-fraction">{score} / {total} correct</span>
      </div>
      <h2 className="result-message">{getMessage()}</h2>
      <div className="result-breakdown">
        <div className="breakdown-item correct-count">
          <span className="breakdown-number">{score}</span>
          <span className="breakdown-label">Correct</span>
        </div>
        <div className="breakdown-item incorrect-count">
          <span className="breakdown-number">{total - score}</span>
          <span className="breakdown-label">Incorrect</span>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={onRestart}>
        Try Again
      </button>
    </div>
  )
}

export default Result

const optionLabels = ['A', 'B', 'C', 'D']

function Review({ questions, answers, subjectName, onBack, onRetry }) {
  return (
    <div className="review">
      <div className="review-header">
        <h2>Review: {subjectName}</h2>
        <p>Go through each question with the correct answer and explanation.</p>
      </div>

      <div className="review-list">
        {questions.map((q, index) => {
          const userAnswer = answers[index]
          const isCorrect = userAnswer === q.correctAnswer

          return (
            <div key={q.id} className={`review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`}>
              <div className="review-item-header">
                <span className="review-number">Q{index + 1}</span>
                <span className={`review-status ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                  {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
              </div>

              <p className="review-question">{q.question}</p>

              <div className="review-answers">
                {q.options.map((option, optIndex) => {
                  const isUserPick = userAnswer === optIndex
                  const isCorrectOption = q.correctAnswer === optIndex
                  let className = 'review-option'

                  if (isCorrectOption) className += ' review-option-correct'
                  if (isUserPick && !isCorrectOption) className += ' review-option-wrong'

                  return (
                    <div key={optIndex} className={className}>
                      <span className="option-label">{optionLabels[optIndex]}</span>
                      <span className="option-text">{option}</span>
                      {isUserPick && <span className="review-tag">Your answer</span>}
                      {isCorrectOption && <span className="review-tag correct-tag">Correct</span>}
                    </div>
                  )
                })}
              </div>

              <div className="review-explanation">
                <strong>Explanation:</strong> {q.explanation}
              </div>
            </div>
          )
        })}
      </div>

      <div className="review-actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          Back to Subjects
        </button>
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Review

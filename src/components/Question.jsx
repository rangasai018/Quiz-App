function Question({ question, selectedAnswer, onSelect, showFeedback }) {
  const optionLabels = ['A', 'B', 'C', 'D']

  const getOptionClass = (index) => {
    const classes = ['option']

    if (selectedAnswer === null) return classes.join(' ')

    if (index === question.correctAnswer) {
      classes.push('correct')
    } else if (index === selectedAnswer) {
      classes.push('incorrect')
    } else {
      classes.push('dimmed')
    }

    return classes.join(' ')
  }

  return (
    <div className="question">
      <h2 className="question-text">{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={getOptionClass(index)}
            onClick={() => onSelect(index)}
            disabled={showFeedback}
          >
            <span className="option-label">{optionLabels[index]}</span>
            <span className="option-text">{option}</span>
            {showFeedback && index === question.correctAnswer && (
              <span className="option-icon correct-icon">✓</span>
            )}
            {showFeedback && index === selectedAnswer && index !== question.correctAnswer && (
              <span className="option-icon incorrect-icon">✗</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question

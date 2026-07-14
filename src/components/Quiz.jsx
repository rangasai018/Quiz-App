import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Result from './Result'

function Quiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  const handleSelect = (index) => {
    if (showFeedback) return

    setSelectedAnswer(index)
    setShowFeedback(true)

    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true)
    } else {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setIsFinished(false)
  }

  if (isFinished) {
    return (
      <Result
        score={score}
        total={questions.length}
        onRestart={handleRestart}
      />
    )
  }

  return (
    <div className="quiz">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="score-badge">
        Score: {score}
      </div>

      <Question
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
        showFeedback={showFeedback}
      />

      {showFeedback && (
        <div className="feedback">
          <p className={`feedback-text ${selectedAnswer === currentQuestion.correctAnswer ? 'feedback-correct' : 'feedback-incorrect'}`}>
            {selectedAnswer === currentQuestion.correctAnswer
              ? 'Correct! Well done.'
              : 'Incorrect. The right answer is highlighted above.'}
          </p>
          <button type="button" className="btn btn-primary" onClick={handleNext}>
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz

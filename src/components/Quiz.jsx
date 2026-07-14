import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Result from './Result'
import Review from './Review'

function Quiz({ subject, onBack }) {
  const { questions, name: subjectName } = subject
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [answers, setAnswers] = useState([])
  const [view, setView] = useState('quiz')

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  const handleSelect = (index) => {
    if (showFeedback) return

    setSelectedAnswer(index)
    setShowFeedback(true)
    setAnswers((prev) => [...prev, index])

    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setView('result')
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
    setAnswers([])
    setView('quiz')
  }

  if (view === 'review') {
    return (
      <Review
        questions={questions}
        answers={answers}
        subjectName={subjectName}
        onBack={onBack}
        onRetry={handleRestart}
      />
    )
  }

  if (view === 'result') {
    return (
      <Result
        score={score}
        total={questions.length}
        subjectName={subjectName}
        onRestart={handleRestart}
        onReview={() => setView('review')}
        onBack={onBack}
      />
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-top">
        <button type="button" className="btn-back" onClick={onBack}>
          ← Back
        </button>
        <span className="subject-label">{subjectName}</span>
      </div>

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
          {currentQuestion.explanation && (
            <p className="feedback-explanation">{currentQuestion.explanation}</p>
          )}
          <button type="button" className="btn btn-primary" onClick={handleNext}>
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz

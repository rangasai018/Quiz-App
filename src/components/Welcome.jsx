function Welcome({ onStart, totalQuestions }) {
  return (
    <div className="welcome">
      <div className="welcome-icon">?</div>
      <h1>Quiz App</h1>
      <p className="welcome-subtitle">
        Test your knowledge with {totalQuestions} fun questions on web development
      </p>
      <ul className="welcome-features">
        <li>Multiple choice questions</li>
        <li>Instant feedback on each answer</li>
        <li>See your score at the end</li>
      </ul>
      <button type="button" className="btn btn-primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  )
}

export default Welcome

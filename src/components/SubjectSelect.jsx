function SubjectSelect({ subjects, onSelect }) {
  return (
    <div className="subjects">
      <div className="subjects-header">
        <h2>Choose a Subject</h2>
        <p>Select a topic to start your quiz. Each subject has 5 questions.</p>
      </div>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            type="button"
            className="subject-card"
            onClick={() => onSelect(subject)}
            style={{ '--subject-color': subject.color }}
          >
            <span className="subject-icon">{subject.icon}</span>
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
            <span className="subject-meta">{subject.questions.length} questions</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SubjectSelect

import { useState } from 'react'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import { questions } from './data/questions'
import './App.css'

function App() {
  const [hasStarted, setHasStarted] = useState(false)

  const handleStart = () => setHasStarted(true)

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Quiz App</h1>
      </header>

      <main className="app-main">
        {!hasStarted ? (
          <Welcome onStart={handleStart} totalQuestions={questions.length} />
        ) : (
          <Quiz questions={questions} />
        )}
      </main>
    </div>
  )
}

export default App

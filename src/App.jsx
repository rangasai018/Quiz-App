import { useState } from 'react'
import { useAuth } from './context/AuthContext'
import AuthPage from './components/AuthPage'
import SubjectSelect from './components/SubjectSelect'
import Quiz from './components/Quiz'
import { subjects } from './data/subjects'
import './App.css'

function App() {
  const { user, loading, signOut } = useAuth()
  const [selectedSubject, setSelectedSubject] = useState(null)

  const handleSelectSubject = (subject) => setSelectedSubject(subject)
  const handleBackToSubjects = () => setSelectedSubject(null)

  if (loading) {
    return <div className="app-loading">Loading...</div>
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Quiz App</h1>
        {user && (
          <div className="header-user">
            <span className="user-greeting">Hi, {user.name}</span>
            <button type="button" className="btn btn-ghost btn-sm" onClick={signOut}>
              Sign Out
            </button>
          </div>
        )}
      </header>

      <main className="app-main">
        {!user ? (
          <AuthPage />
        ) : selectedSubject ? (
          <Quiz subject={selectedSubject} onBack={handleBackToSubjects} />
        ) : (
          <SubjectSelect subjects={subjects} onSelect={handleSelectSubject} />
        )}
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

function AuthPage() {
  const [mode, setMode] = useState('signin')

  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="welcome-icon">?</div>
        <h1>Quiz App</h1>
        <p>Sign in or create an account to explore quizzes across different subjects.</p>
      </div>

      {mode === 'signin' ? (
        <SignIn onSwitchToSignUp={() => setMode('signup')} />
      ) : (
        <SignUp onSwitchToSignIn={() => setMode('signin')} />
      )}
    </div>
  )
}

export default AuthPage

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function SignIn({ onSwitchToSignUp }) {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    const result = signIn({ email, password })
    if (!result.success) setError(result.error)
  }

  return (
    <div className="auth-card">
      <h2>Sign In</h2>
      <p className="auth-subtitle">Welcome back! Sign in to continue.</p>

      <form onSubmit={handleSubmit} className="auth-form">
        {error && <div className="auth-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="signin-email">Email</label>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          Sign In
        </button>
      </form>

      <p className="auth-switch">
        Don&apos;t have an account?{' '}
        <button type="button" className="link-btn" onClick={onSwitchToSignUp}>
          Sign Up
        </button>
      </p>
    </div>
  )
}

export default SignIn

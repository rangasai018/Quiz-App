import { createContext, useContext, useState, useEffect } from 'react'
import { getSession, signIn as authSignIn, signUp as authSignUp, signOut as authSignOut } from '../utils/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(getSession())
    setLoading(false)
  }, [])

  const signUp = (data) => {
    const result = authSignUp(data)
    if (result.success) setUser(result.user)
    return result
  }

  const signIn = (data) => {
    const result = authSignIn(data)
    if (result.success) setUser(result.user)
    return result
  }

  const signOut = () => {
    authSignOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

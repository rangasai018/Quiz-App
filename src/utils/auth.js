const USERS_KEY = 'quiz-app-users'
const SESSION_KEY = 'quiz-app-session'

function getUsers() {
  const data = localStorage.getItem(USERS_KEY)
  return data ? JSON.parse(data) : []
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getSession() {
  const data = localStorage.getItem(SESSION_KEY)
  return data ? JSON.parse(data) : null
}

export function signUp({ name, email, password }) {
  const users = getUsers()
  const normalizedEmail = email.trim().toLowerCase()

  if (users.some((u) => u.email === normalizedEmail)) {
    return { success: false, error: 'An account with this email already exists.' }
  }

  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' }
  }

  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  }

  users.push(user)
  saveUsers(users)

  const session = { id: user.id, name: user.name, email: user.email }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))

  return { success: true, user: session }
}

export function signIn({ email, password }) {
  const users = getUsers()
  const normalizedEmail = email.trim().toLowerCase()
  const user = users.find((u) => u.email === normalizedEmail)

  if (!user || user.password !== password) {
    return { success: false, error: 'Invalid email or password.' }
  }

  const session = { id: user.id, name: user.name, email: user.email }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))

  return { success: true, user: session }
}

export function signOut() {
  localStorage.removeItem(SESSION_KEY)
}

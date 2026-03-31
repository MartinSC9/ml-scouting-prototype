import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MOCK_USERS } from '../../data/mockUsers'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem('mls_user')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setUser(parsed)
        setIsAuthenticated(true)
      } catch { /* ignore */ }
    }
    setLoading(false)
  }, [])

  const checkEmail = (email) => {
    return MOCK_USERS.some((u) => u.email.toLowerCase() === email.toLowerCase())
  }

  const login = (email, password) => {
    const found = MOCK_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!found) return { error: 'Credenciales incorrectas' }
    if (!found.isActive) return { error: 'Usuario inactivo' }

    const { password: _, ...userData } = found
    localStorage.setItem('mls_user', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    return { user: userData }
  }

  const logout = () => {
    localStorage.removeItem('mls_user')
    setUser(null)
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, checkEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

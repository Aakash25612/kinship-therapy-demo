import { createContext, useContext, useMemo, useState } from 'react'
import { appointments as seedAppts, users } from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [appts, setAppts] = useState(seedAppts)
  const [toast, setToast] = useState(null)

  function showToast(message) {
    setToast(message)
    window.setTimeout(() => setToast(null), 2800)
  }

  function login(email, password) {
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) return { ok: false, error: 'Invalid email or password' }
    setUser(found)
    return { ok: true }
  }

  function loginAs(role) {
    setUser(users.find((u) => u.role === role))
  }

  function logout() {
    setUser(null)
  }

  function updateAppt(id, status) {
    setAppts((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)))
    showToast(`Appointment ${status}`)
  }

  const value = useMemo(
    () => ({ user, login, loginAs, logout, appts, updateAppt, toast, showToast }),
    [user, appts, toast],
  )

  return (
    <AppContext.Provider value={value}>
      {children}
      {toast && <div className="toast" role="status">{toast}</div>}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp within AppProvider')
  return ctx
}

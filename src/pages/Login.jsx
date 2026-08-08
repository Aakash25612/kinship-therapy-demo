import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Users } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Login() {
  const { user, login, loginAs } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState('client@kinship.demo')
  const [password, setPassword] = useState('demo123')
  const [error, setError] = useState('')

  if (user) return <Navigate to="/app" replace />

  function onSubmit(e) {
    e.preventDefault()
    const res = login(email.trim(), password)
    if (!res.ok) {
      setError(res.error)
      return
    }
    navigate('/app')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/welcome" className="brand" style={{ color: 'var(--ink)' }}>
          <span className="brand-dot" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
            <Users size={16} />
          </span>
          Kinship
        </Link>
        <h1>Sign in</h1>
        <p>Frontend demo — pick a role to explore the dual mobile/desktop UI.</p>

        <div className="presets">
          {[
            { role: 'client', title: 'Client — Amira', sub: 'client@kinship.demo' },
            { role: 'therapist', title: 'Therapist — Dr. Laila', sub: 'therapist@kinship.demo' },
            { role: 'admin', title: 'Admin — Jordan', sub: 'admin@kinship.demo' },
          ].map((p) => (
            <button
              key={p.role}
              type="button"
              className="preset"
              onClick={() => {
                loginAs(p.role)
                navigate('/app')
              }}
            >
              <strong>{p.title}</strong>
              <span>{p.sub} / demo123</span>
            </button>
          ))}
        </div>

        {error && <div className="form-error">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary btn-full">Continue</button>
        </form>
      </div>
    </div>
  )
}

import { useApp } from '../../context/AppContext'

export default function Sessions() {
  const { user, showToast } = useApp()
  const title = user.role === 'therapist' ? 'Session with Amira Hassan' : 'Session with Dr. Laila Rahman'

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Virtual care</div>
        <h1>Sessions</h1>
        <p>Privacy-focused video room entry (demo).</p>
      </div>
      <div className="session-card">
        <h3>{title}</h3>
        <p>Aug 10 · 10:00 · Encrypted video · 50 minutes</p>
        <button type="button" className="btn btn-primary" onClick={() => showToast('Joining secure room (demo)')}>
          Join session
        </button>
      </div>
      <section className="panel">
        <h2 style={{ marginBottom: 8 }}>Reminders</h2>
        <p className="muted">Push + email reminders fire 24h and 1h before start.</p>
      </section>
    </div>
  )
}

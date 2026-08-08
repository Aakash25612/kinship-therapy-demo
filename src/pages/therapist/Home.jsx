import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

export default function TherapistHome() {
  const { user, appts } = useApp()
  const pending = appts.filter((a) => a.status === 'pending' || a.status === 'requested').length
  const today = appts.filter((a) => a.status === 'confirmed').length

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Therapist</div>
        <h1>{user.name}</h1>
        <p>Credentials on file · culturally matched caseload</p>
      </div>

      <div className="stat-grid">
        <div className="stat"><span>Pending requests</span><strong>{pending}</strong></div>
        <div className="stat"><span>Confirmed</span><strong>{today}</strong></div>
        <div className="stat desktop-only"><span>Assigned clients</span><strong>18</strong></div>
        <div className="stat desktop-only"><span>Verification</span><strong style={{ fontSize: 18 }}>Live</strong></div>
      </div>

      <section className="panel">
        <div className="panel-head">
          <h2>Credentials</h2>
          <span className="badge active">verified</span>
        </div>
        <div className="tags">
          {user.credentials.map((c) => <span key={c} className="tag">{c}</span>)}
        </div>
        <div className="tags" style={{ marginTop: 8 }}>
          {user.specialties.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Today</h2>
          <Link to="/app/appointments" className="btn btn-ghost btn-sm">Review</Link>
        </div>
        <p className="muted">Accept new requests, then join video from Sessions.</p>
        <div className="actions" style={{ marginTop: 12 }}>
          <Link to="/app/availability" className="btn btn-secondary btn-sm">Set availability</Link>
          <Link to="/app/sessions" className="btn btn-primary btn-sm">Open sessions</Link>
        </div>
      </section>
    </div>
  )
}

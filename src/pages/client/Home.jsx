import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { matchQuestions, therapists } from '../../data/mockData'

export default function ClientHome() {
  const { user } = useApp()
  const therapist = therapists.find((t) => t.id === user.therapistId)

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Client</div>
        <h1>Hi, {user.name.split(' ')[0]}</h1>
        <p>Membership care with culturally connected matching.</p>
      </div>

      <div className="stat-grid">
        <div className="stat"><span>Membership</span><strong style={{ fontSize: 18 }}>{user.membershipStatus}</strong></div>
        <div className="stat"><span>Match</span><strong style={{ fontSize: 18 }}>{user.matchStatus}</strong></div>
        <div className="stat desktop-only"><span>Plan</span><strong style={{ fontSize: 18 }}>{user.membership}</strong></div>
        <div className="stat desktop-only"><span>Intro fee</span><strong style={{ fontSize: 18 }}>Paid</strong></div>
      </div>

      <section className="panel">
        <div className="panel-head"><h2>Matching status</h2><span className={`badge ${user.matchStatus}`}>{user.matchStatus}</span></div>
        {therapist ? (
          <>
            <strong>{therapist.name}</strong>
            <p className="muted">Your matched therapist · {therapist.languages.join(', ')}</p>
            <div className="tags">
              {user.cultureTags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="actions" style={{ marginTop: 14 }}>
              <Link to="/app/sessions" className="btn btn-primary btn-sm">Join next session</Link>
              <Link to="/app/book" className="btn btn-secondary btn-sm">Request appointment</Link>
            </div>
          </>
        ) : (
          <p className="muted">Complete matching questions to get paired.</p>
        )}
      </section>

      <section className="panel">
        <h2 style={{ marginBottom: 10 }}>Matching questions</h2>
        <ul>
          {matchQuestions.map((q, i) => (
            <li key={q} className="list-row">
              <div>
                <strong>{i + 1}. {q}</strong>
                <p className="muted">Answered in onboarding</p>
              </div>
              <span className="badge active">done</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

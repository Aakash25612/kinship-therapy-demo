import { therapists, users } from '../../data/mockData'

export default function People() {
  const clients = users.filter((u) => u.role === 'client')

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Directory</div>
        <h1>People</h1>
        <p>Manage clients and therapist profiles.</p>
      </div>
      <section className="panel">
        <h2 style={{ marginBottom: 10 }}>Clients</h2>
        {clients.map((c) => (
          <div key={c.id} className="list-row">
            <div>
              <strong>{c.name}</strong>
              <p className="muted">{c.email} · {c.membership}</p>
            </div>
            <span className={`badge ${c.membershipStatus}`}>{c.membershipStatus}</span>
          </div>
        ))}
        <div className="list-row">
          <div>
            <strong>Kenji Sato</strong>
            <p className="muted">kenji@example.com · Monthly Care</p>
          </div>
          <span className="badge pending">onboarding</span>
        </div>
      </section>
      <section className="panel">
        <h2 style={{ marginBottom: 10 }}>Therapists</h2>
        {therapists.map((t) => (
          <div key={t.id} className="list-row">
            <div>
              <strong>{t.name}</strong>
              <p className="muted">{t.specialties.join(' · ')}</p>
              <div className="tags">{t.cultures.map((c) => <span key={c} className="tag">{c}</span>)}</div>
            </div>
            <span className="badge active">{t.clients} clients</span>
          </div>
        ))}
      </section>
    </div>
  )
}

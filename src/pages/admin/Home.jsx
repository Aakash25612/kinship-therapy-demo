import { appointments, matchingQueue, payments, therapists } from '../../data/mockData'

export default function AdminHome() {
  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Super admin</div>
        <h1>Operations overview</h1>
        <p>Clients, therapists, matching, payments, and care delivery in one console.</p>
      </div>
      <div className="stat-grid">
        <div className="stat"><span>Active members</span><strong>128</strong></div>
        <div className="stat"><span>Therapists</span><strong>{therapists.length}</strong></div>
        <div className="stat"><span>Open matches</span><strong>{matchingQueue.filter((m) => m.status !== 'matched').length}</strong></div>
        <div className="stat"><span>MRR</span><strong style={{ fontSize: 22 }}>$11.4k</strong></div>
      </div>
      <div className="two-col">
        <section className="panel">
          <h2 style={{ marginBottom: 10 }}>Upcoming appointments</h2>
          {appointments.slice(0, 3).map((a) => (
            <div key={a.id} className="list-row">
              <div>
                <strong>{a.client}</strong>
                <p className="muted">{a.therapist} · {a.when}</p>
              </div>
              <span className={`badge ${a.status}`}>{a.status}</span>
            </div>
          ))}
        </section>
        <section className="panel">
          <h2 style={{ marginBottom: 10 }}>Payment health</h2>
          {payments.slice(0, 3).map((p) => (
            <div key={p.id} className="list-row">
              <div>
                <strong>{p.member}</strong>
                <p className="muted">{p.type} · ${p.amount}</p>
              </div>
              <span className={`badge ${p.status}`}>{p.status}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

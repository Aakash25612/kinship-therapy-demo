const clients = [
  { name: 'Amira Hassan', focus: 'Identity · Anxiety', next: 'Aug 10, 10:00' },
  { name: 'Samira Ali', focus: 'Family stress', next: 'Aug 12, 15:00' },
  { name: 'Noor Abbas', focus: 'Acculturation', next: 'Aug 14, 11:00' },
]

export default function Clients() {
  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Caseload</div>
        <h1>Assigned clients</h1>
        <p>Clients matched to your cultural and clinical profile.</p>
      </div>
      <section className="panel">
        {clients.map((c) => (
          <div key={c.name} className="list-row">
            <div>
              <strong>{c.name}</strong>
              <p className="muted">{c.focus}</p>
            </div>
            <span className="muted">{c.next}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

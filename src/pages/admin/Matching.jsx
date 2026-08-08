import { useApp } from '../../context/AppContext'
import { matchingQueue } from '../../data/mockData'

export default function Matching() {
  const { showToast } = useApp()

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Care ops</div>
        <h1>Matching queue</h1>
        <p>Pair clients to culturally aligned therapists.</p>
      </div>
      <section className="panel">
        {matchingQueue.map((m) => (
          <div key={m.id} className="list-row">
            <div>
              <strong>{m.client}</strong>
              <p className="muted">{m.preferences}</p>
            </div>
            <div className="actions" style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
              <span className={`badge ${m.status === 'matched' ? 'matched' : 'pending'}`}>{m.status}</span>
              {m.status !== 'matched' && (
                <button type="button" className="btn btn-primary btn-sm" onClick={() => showToast(`Matched ${m.client}`)}>
                  Assign
                </button>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

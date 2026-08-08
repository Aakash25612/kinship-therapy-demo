import { useApp } from '../../context/AppContext'

export default function TherapistAppts() {
  const { appts, updateAppt } = useApp()
  const mine = appts.filter((a) => a.therapist.includes('Laila') || a.client === 'Kenji Sato')

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Requests</div>
        <h1>Appointments</h1>
        <p>Accept or decline incoming booking requests.</p>
      </div>
      <section className="panel">
        <div className="table-wrap desktop-only">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>When</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {mine.map((a) => (
                <tr key={a.id}>
                  <td>{a.client}</td>
                  <td>{a.when}</td>
                  <td><span className={`badge ${a.status}`}>{a.status}</span></td>
                  <td>
                    {(a.status === 'pending' || a.status === 'requested') && (
                      <div className="actions">
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => updateAppt(a.id, 'confirmed')}>Accept</button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => updateAppt(a.id, 'declined')}>Decline</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mobile-only">
          {mine.map((a) => (
            <div key={a.id} className="list-row">
              <div>
                <strong>{a.client}</strong>
                <p className="muted">{a.when}</p>
                <span className={`badge ${a.status}`}>{a.status}</span>
              </div>
              {(a.status === 'pending' || a.status === 'requested') && (
                <div className="actions" style={{ flexDirection: 'column' }}>
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => updateAppt(a.id, 'confirmed')}>Accept</button>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => updateAppt(a.id, 'declined')}>Decline</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

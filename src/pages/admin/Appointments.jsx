import { useApp } from '../../context/AppContext'

export default function AdminAppts() {
  const { appts, updateAppt } = useApp()

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Scheduling</div>
        <h1>Appointments</h1>
        <p>Oversee bookings, cancellations, and status changes.</p>
      </div>
      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Therapist</th>
                <th>When</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {appts.map((a) => (
                <tr key={a.id}>
                  <td>{a.client}</td>
                  <td>{a.therapist}</td>
                  <td>{a.when}</td>
                  <td><span className={`badge ${a.status}`}>{a.status}</span></td>
                  <td>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => updateAppt(a.id, 'cancelled')}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

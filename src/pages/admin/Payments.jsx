import { useApp } from '../../context/AppContext'
import { payments } from '../../data/mockData'

export default function Payments() {
  const { showToast } = useApp()

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Stripe</div>
        <h1>Payments & subscriptions</h1>
        <p>Intro fees, memberships, refunds, and failed charges.</p>
      </div>
      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id}>
                  <td>{p.member}</td>
                  <td>{p.type}</td>
                  <td>${p.amount}</td>
                  <td>{p.date}</td>
                  <td><span className={`badge ${p.status}`}>{p.status}</span></td>
                  <td>
                    {p.status === 'paid' && (
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => showToast(`Refund queued for ${p.member}`)}>
                        Refund
                      </button>
                    )}
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

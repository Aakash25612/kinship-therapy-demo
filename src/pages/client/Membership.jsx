import { useApp } from '../../context/AppContext'

export default function Membership() {
  const { user, showToast } = useApp()

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Billing</div>
        <h1>Membership</h1>
        <p>Stripe subscription demo — intro fee + monthly plan.</p>
      </div>

      <section className="panel">
        <div className="panel-head">
          <h2>{user.membership}</h2>
          <span className={`badge ${user.membershipStatus}`}>{user.membershipStatus}</span>
        </div>
        <div className="list-row">
          <div><strong>$49 intro fee</strong><p className="muted">One-time matching & onboarding</p></div>
          <span className="badge paid">paid</span>
        </div>
        <div className="list-row">
          <div><strong>$89 / month</strong><p className="muted">Includes virtual sessions in plan</p></div>
          <span className="badge paid">paid</span>
        </div>
        <div className="actions" style={{ marginTop: 12 }}>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => showToast('Stripe portal opened (demo)')}>
            Manage payment method
          </button>
          <button type="button" className="btn btn-danger btn-sm" onClick={() => showToast('Cancellation scheduled (demo)')}>
            Cancel membership
          </button>
        </div>
      </section>
    </div>
  )
}

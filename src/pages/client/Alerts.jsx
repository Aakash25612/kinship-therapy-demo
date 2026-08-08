import { notifications } from '../../data/mockData'

export default function Alerts() {
  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Notifications</div>
        <h1>Alerts</h1>
        <p>Push + email reminders for sessions and membership.</p>
      </div>
      <section className="panel">
        {notifications.map((n) => (
          <div key={n.id} className="notif">
            <span className={`dot ${n.unread ? '' : 'off'}`} />
            <div>
              <strong>{n.text}</strong>
              <p className="muted">{n.time}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default function Reports() {
  const rows = [
    { label: 'New members (30d)', value: '42' },
    { label: 'Match completion rate', value: '86%' },
    { label: 'Session attendance', value: '94%' },
    { label: 'Churn', value: '3.1%' },
    { label: 'Avg. time to first session', value: '4.2 days' },
    { label: 'Refund rate', value: '1.4%' },
  ]

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Insights</div>
        <h1>Reports</h1>
        <p>Lightweight ops metrics for weekly demos.</p>
      </div>
      <div className="stat-grid">
        {rows.map((r) => (
          <div key={r.label} className="stat">
            <span>{r.label}</span>
            <strong style={{ fontSize: 22 }}>{r.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

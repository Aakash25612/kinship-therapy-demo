import { useState } from 'react'
import { useApp } from '../../context/AppContext'

const slots = ['Tue 10:00', 'Tue 15:00', 'Wed 09:30', 'Thu 11:00', 'Fri 14:00']

export default function Book() {
  const { showToast } = useApp()
  const [picked, setPicked] = useState(slots[0])

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Scheduling</div>
        <h1>Request appointment</h1>
        <p>Choose a time with your matched therapist. They accept or decline.</p>
      </div>

      <section className="panel">
        <h2 style={{ marginBottom: 12 }}>Available times</h2>
        <div className="actions">
          {slots.map((s) => (
            <button
              key={s}
              type="button"
              className={`btn btn-sm ${picked === s ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setPicked(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary btn-full"
          style={{ marginTop: 16 }}
          onClick={() => showToast(`Request sent for ${picked}`)}
        >
          Send request
        </button>
      </section>
    </div>
  )
}

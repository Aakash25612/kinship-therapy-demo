import { useState } from 'react'
import { availability as seed } from '../../data/mockData'
import { useApp } from '../../context/AppContext'

export default function Availability() {
  const { showToast } = useApp()
  const [days, setDays] = useState(seed)

  function toggle(day, slot) {
    setDays((prev) =>
      prev.map((d) => {
        if (d.day !== day) return d
        const on = d.slots.includes(slot)
        return {
          ...d,
          slots: on ? d.slots.filter((s) => s !== slot) : [...d.slots, slot].sort(),
        }
      }),
    )
  }

  const catalog = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']

  return (
    <div>
      <div className="page-head">
        <div className="eyebrow">Calendar</div>
        <h1>Availability</h1>
        <p>Tap slots to open or close them for booking requests.</p>
      </div>
      <div className="slot-grid">
        {days.map((d) => (
          <div key={d.day} className="slot-day">
            <strong>{d.day}</strong>
            {catalog.map((slot) => (
              <button
                key={slot}
                type="button"
                className={d.slots.includes(slot) ? 'on' : ''}
                onClick={() => toggle(d.day, slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-primary" style={{ marginTop: 14 }} onClick={() => showToast('Availability saved')}>
        Save hours
      </button>
    </div>
  )
}

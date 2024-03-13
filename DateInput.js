import React, { useState } from 'react'
import './DateInput.css'

function DateInput() {
  const [date, setDate] = useState('')

  return (
    <div className="input-container higher-input">
      <input
        type="text"
        id="Date of the event"
        value={date}
        onChange={e => setDate(e.target.value)}
        required="required"
      />
      <span>Date of the event</span>
      <div className="icon">
        <i className="fas fa-calendar" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default DateInput

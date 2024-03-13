import React, { useState } from 'react'
import './LastNameInput.css'

function LastNameInput() {
    const [lastName, setLastName] = useState('')

  return (
    <div className="input-container higher-input">
        <input
          type="text"
          id="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required="required"
        />
        <span>Last Name</span>
        <div className="icon">
          <i className="fas fa-user" aria-hidden="true"></i>
        </div>
      </div>
  )
}

export default LastNameInput
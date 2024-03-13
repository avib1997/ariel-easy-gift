import React, { useState } from 'react'
import './LastNameInput.css'

function FirstNameInput() {
  const [firstName, setFirstName] = useState('')

  return (
    <div className="input-container higher-input">
      <input
        type="text"
        id="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required="required"
      />
      <span>First Name</span>
      <div className="icon">
        <i className="fas fa-address-card" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default FirstNameInput

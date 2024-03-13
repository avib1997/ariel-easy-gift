import React, { useState } from 'react'
import './PasswordAuthenticationInput.css'

function PasswordAuthenticationInput() {
    const [passwordAuthentication, setPasswordAuthentication] = useState('')

  return (
    <div className="input-container higher-input">
        <input
          type="text"
          id="Password Authentication"
          value={passwordAuthentication}
          onChange={e => setPasswordAuthentication(e.target.value)}
          required="required"
        />
        <span>Password Authentication</span>
        <div className="icon">
          <i className="fas fa-shield" aria-hidden="true"></i>
        </div>
      </div>
  )
}

export default PasswordAuthenticationInput
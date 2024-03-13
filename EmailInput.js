import React, { useState } from 'react'
import './EmailInput.css'

function EmailInput() {
  const [email, setEmail] = useState('')

  return (
    <div className="input-container higher-input">
      <input
        type="text"
        id="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required="required"
      />
      <span>Email</span>
      <div className="icon">
        <i className="fas fa-envelope" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default EmailInput

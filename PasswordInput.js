import React, { useState } from 'react'
import './PasswordInput.css'

function PasswordInput() {
    const [password, setPassword] = useState('')

  return (
    <div className="input-container higher-input">
        <input
          type="text"
          id="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required="required"
        />
        <span>Password</span>
        <div className="icon">
          <i className="fas fa-lock" aria-hidden="true"></i>
        </div>
      </div>
  )
}

export default PasswordInput
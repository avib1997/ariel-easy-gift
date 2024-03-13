import React, { useState } from 'react'
import './GBInput.css'

function GBInput() {
  const [GB, setGB] = useState('')

  return (
    <div className="input-container higher-input">
      <input
        type="text"
        id="Name of groom & bride"
        value={GB}
        onChange={e => setGB(e.target.value)}
        required="required"
      />
      <span>Name of groom & bride</span>
      <div className="icon">
        <i className="fas fa-user-friends" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default GBInput

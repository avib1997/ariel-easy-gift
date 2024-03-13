import React, { useState } from 'react'
import './PhoneNumberInput.css'

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <div className="input-container higher-input">
      <input
        type="text"
        id="PhoneNumber"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        required="required"
      />
      <span>Phone Number</span>
      <div className="icon">
        <i className="fas fa-phone-alt" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default PhoneNumberInput

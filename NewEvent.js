// Import necessary React components and styles
import React, { useState, useEffect } from 'react'
import './NewEvent.css' // You can create a separate CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'
import Dropdown from '../component/Dropdown'
import SelectPaymentMethod from '../component/SelectPaymentMethod'
import FirstNameInput from '../component/FirstNameInput'
import LastNameInput from '../component/LastNameInput'
import EmailInput from '../component/EmailInput'
import PasswordInput from '../component/PasswordInput'
import PasswordAuthenticationInput from '../component/PasswordAuthenticationInput'
import PhoneNumberInput from '../component/PhoneNumberInput'
import GBInput from '../component/GBInput'
import DateInput from '../component/DateInput'

// NewEvent component
const NewEvent = () => {
  const [paymentMethod] = useState('')

  // Handle form submission
  const handleLogin = () => {
    // Perform any necessary actions, e.g., validation, API calls, etc.
    console.log('Login submitted')
    console.log('Selected payment method:', paymentMethod)
  }

  // Effect to initialize the ripple effect on buttons
  useEffect(() => {
    const buttons = document.querySelectorAll('a')
    buttons.forEach(button => {
      button.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let ripple = document.createElement('span')
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        this.appendChild(ripple)
        setTimeout(() => {
          ripple.remove()
        }, 1000)
      })
    })

    // Cleanup event listeners on component unmount
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleLogin)
      })
    }
  }) // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="NewEvent-container">
      {/* Header with bride and groom names */}
      <div className="header">
        <h1 style={{ color: 'white', fontSize: '40px' }}>Create an account</h1>
      </div>
      <div>
        <FirstNameInput />
      </div>
      <div>
        <LastNameInput />
      </div>
      <div>
        <EmailInput />
      </div>
      <div>
        <PasswordInput />
      </div>
      <div>
        <PasswordAuthenticationInput />
      </div>
      <div>
        <PhoneNumberInput />
      </div>
      <div>
        <GBInput />
      </div>
      <div>
        <DateInput />
      </div>
      <div>
        <SelectPaymentMethod />
      </div>
      <div>
        <Dropdown />
      </div>

      {/* Submit button */}
      <div className="btndiv">
        <button className="btnNext" onClick={handleLogin}>
          Next: Payment
        </button>
        <label className="margin">Not a member?</label>
        <button class="btnCreateAccount" onClick={handleLogin}>
          Create account
        </button>
      </div>
    </div>
  )
}

export default NewEvent

import React from 'react'
import './RegistrationPageGeust.css'
import FirstNameInput from '../component/FirstNameInput'
import LastNameInput from '../component/LastNameInput'
import EmailInput from '../component/EmailInput'
import PasswordInput from '../component/PasswordInput'
import PasswordAuthenticationInput from '../component/PasswordAuthenticationInput'
import PhoneNumberInput from '../component/PhoneNumberInput'

const RegistrationPageGeust= () => {
  // Handle form submission
  const handleLogin = () => {
    // Perform any necessary actions, e.g., validation, API calls, etc.
    console.log('Login submitted')
  }

  return (
    <div className="GeustRegistrationContainer">
      <h1 style={{ color: 'white', fontSize: '40px' }}>Geust Registration</h1>
      <FirstNameInput />
      <LastNameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordAuthenticationInput />
      <PhoneNumberInput />
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

export default RegistrationPageGeust

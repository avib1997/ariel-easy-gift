import React from 'react'
import Email from '../component/EmailInput'
import Password from '../component/PasswordInput'
import '../Pages/SignInPage.css'

const SignInPage = () => {
  // Handle form submission
  const handleLogin = () => {
    // Perform any necessary actions, e.g., validation, API calls, etc.
    console.log('Login submitted')
  }
  return (
    <div className="SingInPageContainer">
      <h1 style={{ color: 'white', fontSize: '40px', marginBottom: '40px' }}>
        Sing In
      </h1>
      <Email />
      <Password />
      <div className="btndiv">
        <button className="btnNext" onClick={handleLogin}>
          Sign In
        </button>
        <label className="margin">Not a member?</label>
        <button class="btnCreateAccount" onClick={handleLogin}>
          Create account
        </button>
      </div>
    </div>
  )
}

export default SignInPage

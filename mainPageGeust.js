// Import necessary React components and styles
import React, { useState, useEffect } from 'react'
import './mainPageGeust.css' // You can create a separate CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'

// Login component
const MainPageGeust = () => {
  // State for form fields
  const [blessingAmount, setBlessingAmount] = useState('')
  const [paymentTransition, setPaymentTransition] = useState('')

  // Handle form submission
  const handleLogin = () => {
    // Perform any necessary actions, e.g., validation, API calls, etc.
    console.log('Login submitted')
  }

  const handleBlessingSite = () => {
    // Perform any necessary actions, e.g., validation, API calls, etc.
    console.log('BlessingSite')
    // Navigate to the specified URL
    window.location.href = 'https://brachot.net/main_category.php/Events'
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
  }, []) // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="login-container">
      {/* Header with bride and groom names */}
      <div className="header">
        <div className="circle">
          {/* Place an image of the bride and groom here */}
          <img src="./images/b&g.jpeg" alt="" />
        </div>
        <h1 style={{ color: 'white', fontSize: '32px' }}>JAMES & LILY</h1>
      </div>

      {/* Login form */}
      <div className="input-container">
        {/* Blessing amount input */}
        <input
          type="number"
          id="Amount to pay"
          value={blessingAmount}
          onChange={e => setBlessingAmount(e.target.value)}
          required="required"
          className="input-field"
          autoComplete="off"
          min="0" // Set the minimum value to 0
        />
        <span>Amount to pay</span>
        <div className="icon">
          <i className="fas fa-dollar-sign" aria-hidden="true"></i>
        </div>
      </div>

      {/* Payment transition input */}
      <div className="input-container higher-input">
        <input
          type="text"
          id="Blessing"
          value={paymentTransition}
          onChange={e => setPaymentTransition(e.target.value)}
          required="required"
        />
        <span>Blessing</span>
        <div className="icon">
          <i className="fas fa-gift" aria-hidden="true"></i>
        </div>
      </div>

      <div className="blessing-site">
        <p className='LinkToBlessingSite' href="#" onClick={handleBlessingSite}>
          link to blessing site
        </p>
      </div>

      <div className="payOption">
        <div className="pay">
          <input type="radio" id="option1" name="options" value="option1" />
          <label htmlFor="option1">PayPal</label>
        </div>
        <div className="pay">
          <input type="radio" id="option2" name="options" value="option2" />
          <label htmlFor="option2">PayBox</label>
        </div>
        <div className="pay">
          <input type="radio" id="option3" name="options" value="option3" />
          <label htmlFor="option3">CreditC</label>
        </div>
      </div>

      <div className="forgot">
        <div class="row">
          <label class="custom-checkbox">
            <input type="checkbox" id="rememberMe" checked="checked" />
            <span></span>
          </label>
          <p>Remember me</p>
        </div>
        <button class="forgot-password" onClick={handleLogin}>
          Forgot password
        </button>
      </div>

      {/* Submit button */}
      <div className="btndiv">
        <button onClick={handleLogin}>Next: Payment</button>
        <div className="row-container">
          <div >
          <label className="margin">Not a member?</label>
          <button class="second" onClick={handleLogin}>
            Create account
          </button>
          </div>
          <div >
          <label className="margin">Open event?</label>
          <button class="second" onClick={handleLogin}>
            New event
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPageGeust

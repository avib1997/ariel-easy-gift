// Import necessary React components and styles
import React, { useEffect } from 'react'
import './SubmitBtn.css' // You can create a separate CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'

// Login component
const SubmitBtn = () => {
  // Handle form submission
  const handleLogin = () => {
    // Perform any necessary actions, e.g., validation, API calls, etc.
    console.log('Login submitted')
  }
  // Effect to initialize the ripple effect on the button
  useEffect(() => {
    const button = document.querySelector('.ripple-btn')

    button.addEventListener('click', function (e) {
      let x = e.clientX - e.target.offsetLeft
      let y = e.clientY - e.target.offsetTop
      let ripple = document.createElement('span')
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.classList.add('ripple')
      this.appendChild(ripple)
      setTimeout(() => {
        ripple.remove()
      }, 1000)
    })

    // Cleanup event listener on component unmount
    return () => {
      button.removeEventListener('click', handleLogin)
    }
  }, []) // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="login-container">
      {/* ... (rest of your component) ... */}
      <div className="btns">
        <button
          className="ripple-btn"
          onClick={() => console.log('Button clicked')}
        >
          Button
          <span className="ripple"></span>
        </button>
      </div>
    </div>
  )
}

export default SubmitBtn

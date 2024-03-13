import React, { useState} from 'react'
import './SelectPaymentMethod.css'

const SelectPaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState([]) // Updated to an array for multiple selections

  const handleCheckboxChange = value => {
    // Toggle the selected payment method in the array
    setPaymentMethods(prevMethods =>
      prevMethods.includes(value)
        ? prevMethods.filter(method => method !== value)
        : [...prevMethods, value]
    )
  }

  return (
    <div>
      <div className="paymentmethed">
        <p>Select payment method</p>
      </div>

      <div className="payOption">
        <div className="pay">
          <input
            type="checkbox"
            id="option1"
            value="PayPal"
            onChange={() => handleCheckboxChange('PayPal')}
            checked={paymentMethods.includes('PayPal')}
          />
          <label htmlFor="option1">PayPal</label>
        </div>
        <div className="pay">
          <input
            type="checkbox"
            id="option2"
            value="PayBox"
            onChange={() => handleCheckboxChange('PayBox')}
            checked={paymentMethods.includes('PayBox')}
          />
          <label htmlFor="option2">PayBox</label>
        </div>
        <div className="pay">
          <input
            type="checkbox"
            id="option3"
            value="CreditC"
            onChange={() => handleCheckboxChange('CreditC')}
            checked={paymentMethods.includes('CreditC')}
          />
          <label htmlFor="option3">CreditC</label>
        </div>
      </div>
    </div>
  )
}

export default SelectPaymentMethod

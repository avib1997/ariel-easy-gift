//rfce
import { useState } from 'react'
import './Dropdown.css'
import  list  from '../list.json'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Type of events');

  const handleOptionClick = (event) => {
    setSelectedOption(event);
    setIsOpen(false);
  };

  return (
    <div className="Dropdown-continer">
      <h3 className='Dropdown-titel'>Choose your event</h3>
      <button
        onClick={() => setIsOpen(Preview => !Preview)}
        className="Btn-Dropdown">
        {selectedOption}
        {!isOpen ? (
          <i class="fa-solid fa-caret-up fa-xl"></i>
        ) : (
          <i class="fa-solid fa-caret-down fa-xl"></i>
        )}
      </button>
      {isOpen && (
        <div className="Dropdown-box-items">
          {list.map((item, i) => (
            <div className="Dropdown-items" key={i} onClick={() => handleOptionClick(item.event)}>
              <h3>{item.event}</h3>
              <h3>{item.icon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default Dropdown

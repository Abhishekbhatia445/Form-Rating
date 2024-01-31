import React from 'react';

function Dropdown() {
  return (
    <div className='rating21'>
      <div className='paragraph' >
        <h3>How satisfied are you with your team?</h3>
      </div>
      <div className='dropdown'>
        <select> 
          <option value="verySatisfied">Very Satisfied</option>
          <option value="satisfied">Satisfied</option>
          <option value="neutral">Neutral</option>
          <option value="dissatisfied">Dissatisfied</option>
          <option value="veryDissatisfied">Very Dissatisfied</option>
        </select>
      </div>
    </div>
  );
}

export default Dropdown;

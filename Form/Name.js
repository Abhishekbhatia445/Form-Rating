import React, { useState } from 'react';

const Name = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='Name'>
      <div>
      <h1>Name</h1>
      </div>
      <div className='Name1'>
        <label className='first' >
          <input
          style={{fontSize:"25px"}}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <h4>first:</h4>
        </label>
        <br/>
        <label>
          <input
            style={{fontSize:"25px"}}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <h4>Last:</h4>
        </label>
      </div>
    </div>
  );
};

export default Name;

import React, { useState } from 'react';

const Employee = () => {
  const [formData, setFormData] = useState({
    employee: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <label className='id'>
      <div className='emp'>
       <h1> Employee ID</h1>
       </div>
       <div className='Employee'>
        <input
          style={{fontSize:"25px"}}
        className='employee1'
          type="text"
          name="employee"
          value={formData.employee}
          onChange={handleInputChange}
        />
        </div>
      </label>
     
    </form>
  );
};

export default Employee;

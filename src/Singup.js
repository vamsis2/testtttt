import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    createpassword: '',
    confirmpassword:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className='form2-container'>
      
      <form onSubmit={handleSubmit} className='form2'>
      <h2>Wellcome To Code Editor Sing-Up Here</h2>
        <div>
         
          <input
            type="text"
            name="username"
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          
          <input
            type="email"
            name="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
         
          <input
            type="createpassword"
            name="password"
            placeholder='cratepassword'
            value={formData.password}
            onChange={handleChange}
          />
             <input
            type="confirmpassword"
            name="confirmpassword"
            placeholder='confirmpassword'
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

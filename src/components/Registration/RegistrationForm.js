import React, { useState } from 'react';

import RegistrationButton from './RegistrationButton';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sprawdzanie, czy hasło i potwierdzenie hasła są takie same
    if (formData.password === formData.confirmPassword) {
      setPasswordMatch(true);
      // Tutaj możesz dodać logikę obsługi danych z formularza,
      // np. walidację i wysłanie ich do serwera
      console.log(formData);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div>
      <h2 className='title-reg'>Registration</h2>
      <form className='registration-form' onSubmit={handleSubmit}>
        <div className='container-reg'>
          <label className='label-reg'>
            Name:
          </label>
          <input className='input-reg'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='container-reg'>
          <label className='label-reg'>
            Surname:
          </label>
          <input className='input-reg'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='container-reg'>
          <label className='label-reg'>
            Username:
          </label>
          <input className='input-reg'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='container-reg'>
          <label className='label-reg'>
            Password:
          </label>
          <input className='input-reg'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='container-reg'>
          <label className='label-reg'>
            Confirm password:
          </label>
          <input className='input-reg'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          </div>
        {!passwordMatch && <p>Hasła nie pasują do siebie.</p>}
        <RegistrationButton />
      </form>
    </div>
    
  );
}


export default RegistrationForm;
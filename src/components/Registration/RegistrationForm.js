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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę obsługi danych z formularza,
    // np. walidację i wysłanie ich do serwera
    console.log(formData);
  };

  return (
    <div>
      <h2 className='title-reg' >Registration</h2>
      <form className='registration-form' onSubmit={handleSubmit}>
        <label className='label-reg'>
          Imię:
          <input class='input-reg'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-reg'>
          Nazwisko:
          <input class='input-reg'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-reg'>
          Login:
          <input class='input-reg'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-reg'>
          Hasło:
          <input class='input-reg'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-reg'>
          Potwierdź Hasło:
          <input class='input-reg'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <RegistrationButton />
      </form>
    </div>
  );
}

export default RegistrationForm;
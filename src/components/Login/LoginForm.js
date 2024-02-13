import React, { useState } from 'react';

import LoginButton from './LoginButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz umieścić logikę przesyłania danych logowania do serwera
    console.log('Nazwa użytkownika:', username);
    console.log('Hasło:', password);
    // Możesz również dodać logikę uwierzytelniania użytkownika
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input className='login-input'
            type="text"
            id="username"
            value={username}
            placeholder="USERNAME"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input className='login-input'
            type="password"
            id="password"
            value={password}
            placeholder="PASSWORD"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <LoginButton/>
      </form>
    </div>
  );
};

export default LoginForm;
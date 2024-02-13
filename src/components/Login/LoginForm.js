import React, { useState } from 'react';

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
      <h2>Formularz logowania</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input className='login-input'
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Hasło:</label>
          <input className='login-input'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
};

export default LoginForm;
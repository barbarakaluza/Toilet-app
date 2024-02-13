import React, { useState } from 'react';

const OpinionForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz przekazać dane do serwera lub wykonać inne akcje
    console.log('Dane wysłane:', { name, address, comment });
    // Wyczyść formularz po wysłaniu
    setName('');
    setAddress('');
    setComment('');
  };

  return (
    <form className='opinion-form' onSubmit={handleSubmit}>
      <label>
        Imię:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Adres toalety publicznej:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        Twój komentarz:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
      <button type="submit">Wyślij opinię</button>
    </form>
  );
};

export default OpinionForm;
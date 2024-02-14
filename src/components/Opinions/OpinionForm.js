import React, { useState } from 'react';
import OpinionButton from './OpinionButton';

const OpinionForm = () => {

        const [address, setAddress] = useState('');
        const [opinion, setOpinion] = useState('');
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Tutaj możesz dodać logikę obsługi przesłania formularza
          console.log('Adres:', address);
          console.log('Opinia:', opinion);
        };
      
        return (
          <form className='opinion-form' onSubmit={handleSubmit}>
            <label className='label-opinion'>
              Toilet address:
              <input className='adress-input'
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </label>
            <br />
            <label className='label-opinion'>
              Your opinion:
              <textarea className='opinion-input'
                value={opinion}
                onChange={(event) => setOpinion(event.target.value)}
              />
            </label>
            <br />
          <OpinionButton />
          </form>
        );
}

export default OpinionForm;
import React from 'react';

const EmailStep = ({ currentStep, email, handleChange }) => {
  if (currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <label>Email</label>
      <input
        name='email'
        type='text'
        placeholder='Введите email'
        value={email}
        onChange={handleChange}
      />
    </div>
  );
};

export default EmailStep;

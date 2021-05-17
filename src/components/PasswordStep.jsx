import React from 'react';

const PasswordStep = ({ currentStep, password, handleChange }) => {
  if (currentStep !== 3) {
    return null;
  }

  return (
    <div>
      <label>Пароль</label>
      <input
        name='password'
        type='password'
        placeholder='Введите пароль'
        value={password}
        onChange={handleChange}
      />
    </div>
  );
};

export default PasswordStep;

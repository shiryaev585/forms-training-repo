import React from 'react';

const UserNameStep = ({ currentStep, username, handleChange }) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <label>Имя</label>
      <input
        name='username'
        type='text'
        placeholder='Введите имя'
        value={username}
        onChange={handleChange}
      />
    </div>
  );
};

export default UserNameStep;

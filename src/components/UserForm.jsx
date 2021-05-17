import React, { useState } from 'react';
import EmailStep from './EmailStep';
import PasswordStep from './PasswordStep';
import UserNameStep from './UserNameStep';

const UserForm = () => {
  const [formState, setFormState] = useState({
    currentStep: 1,
    username: '',
    email: '',
    password: '',
  });

  console.log(formState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = formState;
    alert(
      `Введенные данные: \nИмя: ${username} \nEmail: ${email} \nПароль: ${password}`
    );
  };

  const _next = () => {
    let currentStep = formState.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setFormState({
      ...formState,
      currentStep: currentStep,
    });
  };
  const _prev = () => {
    let currentStep = formState.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setFormState({
      ...formState,
      currentStep: currentStep,
    });
  };

  const previousButton = () => {
    let currentStep = formState.currentStep;
    if (currentStep !== 1) {
      return (
        <button type='button' onClick={_prev}>
          Назад
        </button>
      );
    }
    return null;
  };
  const nextButton = () => {
    let currentStep = formState.currentStep;
    if (currentStep < 3) {
      return (
        <button type='button' onClick={_next}>
          Вперед
        </button>
      );
    }
    return null;
  };
  const sendButton = () => {
    let currentStep = formState.currentStep;
    if (currentStep === 3) {
      return <button>Отправить</button>;
    }
    return null;
  };

  return (
    <div>
      <h1>Форма входа</h1>
      <p>Шаг {formState.currentStep} </p>

      <form onSubmit={handleSubmit}>
        <UserNameStep
          currentStep={formState.currentStep}
          handleChange={handleChange}
          username={formState.username}
        />
        <EmailStep
          currentStep={formState.currentStep}
          handleChange={handleChange}
          email={formState.email}
        />
        <PasswordStep
          currentStep={formState.currentStep}
          handleChange={handleChange}
          password={formState.password}
        />
        <p>
          {previousButton()}
          {nextButton()}
          {sendButton()}
        </p>
      </form>
    </div>
  );
};

export default UserForm;

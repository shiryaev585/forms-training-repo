import React, { useState } from "react";
import "./LoginForm.scss";
import CloseButton from "./icons/CloseButton";
import LoginEmailStep from "./Steps/LoginEmailStep";
import LoginPasswordStep from "./Steps/LoginPasswordStep";
import LoginPayStep from "./Steps/LoginPayStep";

const Login = ({ isOpened, closeLogin }) => {
    const [formState, setFormState] = useState({
        currentStep: 1,
        username: "",
        email: "",
        password: "",
        phone: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    const nextStep = () => {
        let currentStep = formState.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setFormState({
            ...formState,
            currentStep: currentStep,
        });
    };

    return (
        <div className={`login ${isOpened ? "open" : "close"}`}>
            <button className="login__close-btn" onClick={closeLogin}>
                <CloseButton />
            </button>
            <form className="login__wrapper" onSubmit={handleSubmit}>
                <LoginEmailStep
                    currentStep={formState.currentStep}
                    handleChange={handleChange}
                    email={formState.email}
                >
                    <button className="login__form-btn mt-40" onClick={nextStep}>
                        Продолжить
                    </button>
                </LoginEmailStep>
                <LoginPasswordStep
                    currentStep={formState.currentStep}
                    handleChange={handleChange}
                    password={formState.password}
                >
                    <button className="login__form-btn mt-50" onClick={nextStep}>Войти</button>
                </LoginPasswordStep>
                <LoginPayStep
                    currentStep={formState.currentStep}
                    handleChange={handleChange}
                    username={formState.username}
                    email={formState.email}
                    phone={formState.phone}
                >
                    <button className="login__form-btn mt-50">Оплатить</button>
                </LoginPayStep>
            </form>
        </div>
    );
};

export default Login;
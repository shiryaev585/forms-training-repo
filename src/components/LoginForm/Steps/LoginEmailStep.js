import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../icons/FacebookIcon";
import GoogleIcon from "../icons/GoogleIcon";
import VkIcon from "../icons/VkIcon";

const LoginEmailStep = ({ currentStep, email, handleChange, children }) => {
    if (currentStep !== 1) {
        return null;
    }

    return (
        <>
            <h1 className="login__title">Вход / регистрация</h1>
            <div className="login__logo-wrapper mt-70">
                <a
                    className="login__logo-facebook"
                    href="https://www.facebook.com/"
                    target="_blanc"
                >
                    <FacebookIcon />
                </a>
                <a
                    className="login__logo-vk"
                    href="https://vk.com/"
                    target="_blanc"
                >
                    <VkIcon />
                </a>
                <a
                    className="login__logo-google"
                    href="https://google.com/"
                    target="_blanc"
                >
                    <GoogleIcon />
                </a>
            </div>
            <p className="login__text mt-70">или</p>
            <input
                name="email"
                className="login__form-input mt-20"
                type="email"
                placeholder="Введите свой E-mail"
                value={email}
                onChange={handleChange}
            />
            {children}
            <p className="login__small-text mt-20">
                Продолжая, Вы соглашаетесь с{" "}
                <Link className="login__link" to="/conditions">
                    Условиями
                </Link>{" "}
                и{" "}
                <Link className="login__link" to="/privacy_policy">
                    Политикой конфиденциальности
                </Link>
            </p>
        </>
    );
};

export default LoginEmailStep;

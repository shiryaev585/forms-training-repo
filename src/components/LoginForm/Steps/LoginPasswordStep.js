import React from "react";
import { Link } from "react-router-dom";
import UserLightIcon from "../../../assets/icons/UserLightIcon";

const LoginPasswordStep = ({ children, currentStep, password, handleChange }) => {
    if (currentStep !== 2) {
        return null;
    }

    return (
        <>
            <h1 className="login__title">Добро пожаловать</h1>
            <div className="mt-40">
                <UserLightIcon />
            </div>
            <p className="login__text mt-20">polsovatel@yandex.ru</p>
            <input
                name="password"
                className="login__form-input mt-20"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={handleChange}
            />
            <Link
                className="login__small-text login__link-fogot_password mt-70"
                to="/fogot_password"
            >
                Забыли пароль?
            </Link>
            { children }
        </>
    );
};

export default LoginPasswordStep;

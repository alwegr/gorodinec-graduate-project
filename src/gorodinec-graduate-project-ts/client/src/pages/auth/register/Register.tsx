import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../AuthInterface";
import "../Auth_style.css";

const URL = process.env.REACT_APP_URL;

const Register: React.FC = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<AuthUser>({});
  const [userExistsError, setUserExistsError] = useState<boolean>(false); // Переменная для отображения ошибки о существующем пользователе
  const navigate = useNavigate();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    const newErrors: AuthUser = {};

    if (!userName) newErrors.userName = "Введите логин";
    if (!password) newErrors.password = "Введите пароль";

    if (Object.keys(newErrors).length > 0) {
      newErrors.all = "Пожалуйста, заполните все обязательные поля";
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(`${URL}/auth/register`, {
        userName,
        password,
      });

      console.log(response.data);
      navigate("/");
    } catch (error) {
      if (error) {
        setUserExistsError(true); // Устанавливаем переменную состояния, чтобы показать сообщение о существующем пользователе
      } else {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div className={"page_auth"}>
        <div className={"wrapper_auth"}>
          <form>
            <h2 className={"header_auth"}>Регистрация</h2>
            <div>
              <label htmlFor="login">Логин</label>
              <div>
                <input
                  id="login"
                  type="text"
                  placeholder="Введите логин"
                  value={userName}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      userName: e.target.value ? "" : "Введите логин",
                    }));
                  }}
                />
                {errors.userName && (
                  <div className="error-message">{errors.userName}</div>
                )}
              </div>
            </div>
            <div>
              <label>Пароль</label>
              <div>
                <input
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      password: e.target.value ? "" : "Введите пароль",
                    }));
                  }}
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
            </div>
            <div>
              <button className={"register_btn"} onClick={handleRegister}>
                <p>Зарегистрировать</p>
              </button>
            </div>
            <div className={"cancel_btn"}>
              <Link to={"/"}>
                Уже есть аккаунт?
              </Link>
            </div>
            <div className="container-error-message">
              {userExistsError && (
                <div className="error-message">
                  Пользователь с таким логином уже существует
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;

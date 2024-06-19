import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Auth_style.css";

const URL = process.env.REACT_APP_URL;

const Login: React.FC = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNotFoundError, setUserNotFoundError] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    userName?: string;
    password?: string;
  }>({});
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    let newErrors: { userName?: string; password?: string } = {};

    if (!userName) {
      newErrors.userName = "Введите логин";
    }
    if (!password) {
      newErrors.password = "Введите пароль";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post(`${URL}/auth/login`, {
        userName,
        password,
      });
      navigate("/documents/serviceNote");
    } catch (error) {
      if (error) {
        setUserNotFoundError(true);
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
            <h2 className={"header_auth"}>Войти</h2>
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
              <button className={"login_btn"} onClick={handleLogin}>
                <p>Войти</p>
              </button>
            </div>
            <div className={"cancel_btn"}>
              <Link to={"/register"}>Нет аккаунта?</Link>
            </div>
            <div className="container-error-message">
              {userNotFoundError && (
                <div className="error-message">
                  Такого пользователя не существует
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  const [isValid, setIsValid] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return regex.test(email);
  };

  return (
    <form className={"auth__form"}>
      <h3 className={"auth__title"}>Login</h3>
      <button type={"button"} className={"btn btn-google"}>
        {" "}
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google button"
        />{" "}
        Log in with Google
      </button>

      <label className={"label"} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className={"auth__input"}
        type="email"
        placeholder={"Email@domain"}
        name="email"
        value={form.email}
        autoComplete={"off"}
        onChange={handleChange}
      />

      <label className={"label"} htmlFor="password">
        Password
      </label>
      <input
        value={form.password}
        id="password"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        name="password"
        autoComplete={"off"}
        onChange={handleChange}
      />

      <button
        disabled={!isValidEmail(form.email)}
        className={`btn btn-login ${isValid && valid}`}
        type="submit"
      >
        Login
      </button>

      <p className={"QuestionRegistration"}>Don´t have an account?</p>

      <Link to="/auth/register" className={"btn btn-singUP"}>
        Sing up
      </Link>
    </form>
  );
};

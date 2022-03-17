import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <form className={"auth__form"}>
      <h3 className={"auth__title"}>Register</h3>

      <label className={"label"} htmlFor="email">
        Name
      </label>
      <input
        id="name"
        className={"auth__input"}
        type="text"
        placeholder={"Name"}
        name="name"
        autoComplete={"off"}
      />

      <label className={"label"} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className={"auth__input"}
        type="email"
        placeholder={"Email@domain"}
        name="email"
        autoComplete={"off"}
      />

      <label className={"label"} htmlFor="password">
        Password
      </label>
      <input
        id="password"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        name="password"
        autoComplete={"off"}
      />
      <label className={"label"} htmlFor="password">
        Confirm Password
      </label>
      <input
        id="password2"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        name="password2"
        autoComplete={"off"}
      />

      <button className={`btn btn-login`} type="submit">
        Register
      </button>

      <p className={"QuestionRegistration"}>Do you already have an account ?</p>

      <Link to="/auth/login" className={"btn btn-singUP"}>
        Sing in
      </Link>
    </form>
  );
};

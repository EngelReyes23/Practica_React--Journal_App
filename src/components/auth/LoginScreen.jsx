import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginWidthGoogle, loginWidthEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const { handleInputChange, formValues } = useForm({
    email: "asdf@gmail.com",
    password: "123456789",
  });

  const { email, password } = formValues;

  //#region Handles
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWidthEmailPassword(email, password));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWidthGoogle());
  };
  //#endregion Handles

  // const isValidEmail = (email) => {
  //   const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  //   return regex.test(email);
  // };

  return (
    <form className={"auth__form"} onSubmit={handleLogin}>
      <h3 className={"auth__title"}>Login</h3>
      <button
        onClick={handleGoogleLogin}
        type={"button"}
        className={"btn btn-google"}
      >
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
        value={email}
        autoComplete={"off"}
        onChange={handleInputChange}
      />

      <label className={"label"} htmlFor="password">
        Password
      </label>
      <input
        value={password}
        id="password"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        name="password"
        autoComplete={"off"}
        onChange={handleInputChange}
      />

      <button
        // disabled={!isValidEmail(form.email)}
        className={`btn btn-login`}
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

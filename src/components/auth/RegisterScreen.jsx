import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  // dispatch for actions from react-redux
  const dispatch = useDispatch();

  // selector for the state from react-redux
  const { msgError } = useSelector((state) => state.ui);

  // elimina el error cuando se desmonta el componente
  useEffect(() => {
    return () => {
      dispatch(removeError());
    };
  }, []);

  // #region states

  const { handleInputChange, formValues } = useForm({
    name: "name",
    email: "asdf@gmail.com",
    password: "123456789",
    confirmPassword: "123456789",
  });

  const { name, email, password, confirmPassword } = formValues;

  //#endregion states

  // #region Handles
  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) console.log(name, email, password, confirmPassword);
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== confirmPassword || password.length < 6) {
      dispatch(
        setError("Password does not match or is less than 6 characters")
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  // #endregion Handles

  return (
    <form className={"auth__form"} onSubmit={handleRegister}>
      <h3 className={"auth__title"}>Register</h3>

      {msgError && <div className="auth__alert-error">{msgError}</div>}

      <label className={"label"} htmlFor="name">
        Name
      </label>
      <input
        id="name"
        className={"auth__input"}
        type="text"
        placeholder={"Name"}
        name="name"
        value={name}
        onChange={handleInputChange}
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
        value={email}
        onChange={handleInputChange}
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
        value={password}
        onChange={handleInputChange}
        autoComplete={"off"}
      />
      <label className={"label"} htmlFor="password2">
        Confirm Password
      </label>
      <input
        id="password2"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleInputChange}
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

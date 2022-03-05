import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className={"auth__title"}>Login</h3>

      <form className={"auth__form"}>
        <button className={"btn btn-google"}>
          {" "}
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />{" "}
          Log in with Google
        </button>

        <hr />

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
          placeholder={"Password"}
          name="password"
          autoComplete={"off"}
        />
        <button className={"btn"} type="submit">
          Login
        </button>

        <Link to="/auth/register" className={""}>
          Sing up
        </Link>
      </form>
    </>
  );
};

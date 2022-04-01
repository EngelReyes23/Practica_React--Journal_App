import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
import { loginWidthEmailPassword, loginWidthGoogle } from "../../actions/auth";
import { emailIsValid } from "../../helpers/emailIsValid";
import { RequiredValues } from "../../helpers/requiredForm";

export const LoginScreen = () => {
  //#region Redux
  // dispatch for actions from react-redux
  const dispatch = useDispatch();

  // selector for the state from react-redux
  const { msgError, loading } = useSelector((state) => state.ui);
  //#endregion Redux

  //#region States
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //#endregion States

  //#region Handles
  // Hace el dispatch para el login
  const handleLogin = ({ email, password }, e) => {
    e.preventDefault();

    // Verifica si los campos son validos para hacer el dispatch
    if (emailIsValid(email)) dispatch(loginWidthEmailPassword(email, password));

    e.target.reset();
  };

  // Hace el dispatch para el login con google
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWidthGoogle());
  };
  //#endregion Handles

  return (
    <form className={"auth__form"} onSubmit={handleSubmit(handleLogin)}>
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

      {msgError && <div className="auth__alert-error">{msgError}</div>}

      <label className={"label"} htmlFor="email">
        {errors.email ? errors.email.message : "Email"}
      </label>
      <input
        id="email"
        className={"auth__input"}
        type="email"
        placeholder={"Email@domain"}
        autoComplete={"off"}
        {...register("email", {
          required: RequiredValues("Email"),
        })}
      />

      <label className={"label"} htmlFor="password">
        {errors.password ? errors.password.message : "Password"}
      </label>
      <input
        id="password"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        autoComplete={"off"}
        {...register("password", {
          required: RequiredValues("Password"),
        })}
      />

      <button disabled={loading} className={`btn btn-login`} type="submit">
        Login
      </button>

      <p className={"QuestionRegistration"}>Don´t have an account?</p>

      <Link to="/auth/register" className={"btn btn-singUP"}>
        Sing up
      </Link>
    </form>
  );
};

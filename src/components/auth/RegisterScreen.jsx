import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
import { registerEmailPasswordName } from "../../actions/auth";
import { emailIsValid } from "../../helpers/emailIsValid";
import { RequiredValues } from "../../helpers/requiredForm";

export const RegisterScreen = () => {
  //#region Redux
  // dispatch for actions from react-redux
  const dispatch = useDispatch();

  // selector for the state from react-redux
  const { msgError } = useSelector((state) => state.ui);
  //#endregion Redux

  //#region States
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //#endregion states

  // #region Handles
  // Hace el dispatch para el registro
  const handleRegister = ({ name, email, password }, e) => {
    e.preventDefault();
    if (emailIsValid(email))
      dispatch(registerEmailPasswordName(email, password, name));

    e.target.reset();
  };
  // #endregion Handles

  return (
    <form className={"auth__form"} onSubmit={handleSubmit(handleRegister)}>
      <h3 className={"auth__title"}>Register</h3>

      {msgError && <div className="auth__alert-error">{msgError}</div>}

      <label className={"label"} htmlFor="name">
        {errors.name ? errors.name.message : "Name"}
      </label>
      <input
        id="name"
        className={"auth__input"}
        type="text"
        placeholder={"Name"}
        autoComplete={"off"}
        {...register("name", {
          required: RequiredValues("Name"),
        })}
      />

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
      <label className={"label"} htmlFor="password2">
        {errors.confirmPassword
          ? errors.confirmPassword.message
          : "Confirm Password"}
      </label>
      <input
        id="password2"
        className={"auth__input"}
        type="password"
        placeholder={"********"}
        autoComplete={"off"}
        {...register("confirmPassword", {
          required: RequiredValues("Confirm Password"),
        })}
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

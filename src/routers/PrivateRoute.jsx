import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isAuthenticate,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/auth/login"} />
        )
      }
    />
  );
};

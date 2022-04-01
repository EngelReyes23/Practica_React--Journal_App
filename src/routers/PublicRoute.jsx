import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  component: Component,
  isAuthenticate,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticate ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};

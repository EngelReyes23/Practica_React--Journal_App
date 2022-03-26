import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // verifica si contiene un usuario
      user?.uid && dispatch(login(user.uid, user.displayName));
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/auth"} component={AuthRouter} />
          <Route exact path={"/"} component={JournalScreen} />

          {/* REDIRECT TO LOGIN */}
          <Redirect to={"/auth/login"} />
        </Switch>
      </div>
    </Router>
  );
};

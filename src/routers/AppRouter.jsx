import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Loading } from "../components/loading/Loading";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [ready, setReady] = useState(false);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // verifica si contiene un usuario
      user?.uid && dispatch(login(user.uid, user.displayName));
    });

    setReady(true);
  }, []);

  if (!ready) return <Loading />;

  return (
    <Router>
      <div>
        {/* loading para mostrar en cualquier pantalla */}
        {loading && <Loading />}
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

import { TYPES } from "../types/TYPES";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, setError, startLoading } from "./ui";

//#region Login

export const loginWidthEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(finishLoading());
        dispatch(setError(error.message));
      });
  };
};

export const loginWidthGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: TYPES.login,
  payload: { uid, displayName },
});
//#endregion Login

//#region Register

export const registerEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        /* INFO: actualiza el displayName del usuario, ya que al momento de
        crearlo no se le asigna uno por defecto */
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(finishLoading());
        dispatch(setError(error.message));
      });
  };
};
//#endregion Register

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { TYPES } from "../types/TYPES";
import { finishLoading, showError, startLoading } from "./ui";

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
        dispatch(showError(error.message));
        Swal.fire("Error", error.message, "error");
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
        dispatch(showError(error.message));
        Swal.fire("Error", error.message, "error");
      });
  };
};
//#endregion Register

//#region Logout

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(finishLoading());
  };
};

export const logout = () => ({
  type: TYPES.logout,
});
//#endregion Logout

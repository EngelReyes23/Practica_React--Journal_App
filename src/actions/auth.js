import { TYPES } from "../types/TYPES";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const loginWidthEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(1234, "Reyes"));
    }, 3500);
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

import { TYPES } from "../types/TYPES";

const setError = (errorName) => ({
  type: TYPES.uiSetError,
  payload: errorName,
});

const removeError = () => ({
  type: TYPES.uiRemoveError,
});

export const showError = (errorName) => {
  return (dispatch) => {
    dispatch(setError(errorName));

    // retira el error después de 3 segundos
    setTimeout(() => {
      dispatch(removeError());
    }, 5000);
  };
};

export const startLoading = () => ({ type: TYPES.uiStartLoading });

export const finishLoading = () => ({ type: TYPES.uiFinishLoading });

import { TYPES } from "../types/TYPES";

export const setError = (errorName) => ({
  type: TYPES.uiSetError,
  payload: errorName,
});

export const removeError = () => ({
  type: TYPES.uiRemoveError,
});

export const startLoading = () => ({ type: TYPES.uiStartLoading });

export const finishLoading = () => ({ type: TYPES.uiFinishLoading });

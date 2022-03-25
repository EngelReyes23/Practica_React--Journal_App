import { TYPES } from "../types/TYPES";

export const setError = (errorName) => ({
  type: TYPES.uiSetError,
  payload: errorName,
});

export const removeError = () => ({
  type: TYPES.uiRemoveError,
});

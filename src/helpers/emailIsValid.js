import validator from "validator";

export const emailIsValid = (email) =>
  validator.isEmail(email) ? true : false;

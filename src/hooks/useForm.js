import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setValues] = useState(initialState);

  const reset = (value = initialState) => {
    setValues(value);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return { formValues, handleInputChange, reset };
};

import { useCallback, useState } from "react";

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;

    setValues(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevState => ({ ...prevState, [name]: input.validationMessage }));
    setIsFormValid(input.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid]
  )

  return {values, handleChange, errors, isFormValid, resetForm, setValues, setErrors, setIsFormValid}
}

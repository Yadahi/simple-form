import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueTouched, setInputValueTouched] = useState(false);

  const inputValueIsValid = validateValue(inputValue);
  const inputValueIsNotValid = !inputValueIsValid && inputValueTouched;

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputValueBlurHandler = () => {
    setInputValueTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setInputValueTouched(false);
  };

  return {
    value: inputValue,
    valueTouched: inputValueTouched,
    valueIsValid: inputValueIsValid,
    valueHasError: inputValueIsNotValid,
    inputValueChangeHandler,
    inputValueBlurHandler,
    resetInput,
  };
};

export default useInput;

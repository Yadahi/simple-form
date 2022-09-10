import { useState } from "react";
import useInput from "../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = () => {
  const {
    value: textInput,
    valueTouched: textInputTouched,
    valueIsValid: textInputIsValid,
    valueHasError: textInputIsInvalid,
    inputValueChangeHandler: textChangeHandler,
    inputValueBlurHandler: textBlurHandler,
    resetInput: textResetInput,
  } = useInput(isNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!textInputIsValid) {
      return;
    }

    console.log(textInput);
    textResetInput();
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name"></input>
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name"></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone"></input>
        </div>
        <div>
          <label htmlFor="text">Last Name:</label>
          <textarea
            id="text"
            row="5"
            col="30"
            value={textInput}
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
          ></textarea>
          {textInputIsInvalid && <p>Text is empty or invalid</p>}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;

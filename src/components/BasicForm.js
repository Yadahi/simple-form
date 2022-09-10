import { useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = () => {
  const [textInput, setTextInput] = useState("");
  const [textInputTouched, setTextInputTouched] = useState(false);

  const textInputIsValid = isNotEmpty(textInput);
  const textInputIsInvalid = !isNotEmpty(textInput) && textInputTouched;

  const textChangeHandler = (event) => {
    setTextInput(event.target.value);
  };

  const textBlurHandler = () => {
    setTextInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!textInputIsValid) {
      return;
    }

    console.log(textInput);
    setTextInput("");
    setTextInputTouched(false);
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

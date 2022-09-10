import { useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = () => {
  const [textInput, setTextInput] = useState("");

  const textInputIsValid = isNotEmpty(textInput);
  const textInputIsInvalid = !isNotEmpty(textInput);

  const textChangeHandler = (event) => {
    setTextInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!textInputIsValid) {
      return;
    }

    console.log(textInput);
    setTextInput("");
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

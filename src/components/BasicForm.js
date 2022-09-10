import useInput from "../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = () => {
  // First name
  const {
    value: firstNameInput,
    valueIsValid: firstNameInputIsValid,
    valueHasError: firstNameInputIsInvalid,
    inputValueChangeHandler: firstNameChangeHandler,
    inputValueBlurHandler: firstNameBlurHandler,
    resetInput: firstNameResetInput,
  } = useInput(isNotEmpty);

  // Last name
  const {
    value: lastNameInput,
    valueIsValid: lastNameInputIsValid,
    valueHasError: lastNameInputIsInvalid,
    inputValueChangeHandler: lastNameChangeHandler,
    inputValueBlurHandler: lastNameBlurHandler,
    resetInput: lastNameResetInput,
  } = useInput(isNotEmpty);

  // Email
  // TODO need to update the email validation function
  const {
    value: emailInput,
    valueIsValid: emailInputIsValid,
    valueHasError: emailInputIsInvalid,
    inputValueChangeHandler: emailChangeHandler,
    inputValueBlurHandler: emailBlurHandler,
    resetInput: emailResetInput,
  } = useInput(isNotEmpty);

  // Phone
  // TODO need to update the phone validation function
  const {
    value: phoneInput,
    valueIsValid: phoneInputIsValid,
    valueHasError: phoneInputIsInvalid,
    inputValueChangeHandler: phoneChangeHandler,
    inputValueBlurHandler: phoneBlurHandler,
    resetInput: phoneResetInput,
  } = useInput(isNotEmpty);

  // Textarea
  const {
    value: textInput,
    valueIsValid: textInputIsValid,
    valueHasError: textInputIsInvalid,
    inputValueChangeHandler: textChangeHandler,
    inputValueBlurHandler: textBlurHandler,
    resetInput: textResetInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailInputIsValid && phoneInputIsValid && textInputIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!textInputIsValid) {
      return;
    }

    console.log(
      "Form input values:",
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      textInput
    );
    firstNameResetInput();
    lastNameResetInput();
    emailResetInput();
    phoneResetInput();
    textResetInput();
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstNameInput}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          ></input>
          {firstNameInputIsInvalid && <p>First name is invalid</p>}
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastNameInput}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          ></input>
          {lastNameInputIsInvalid && <p>Last name is invalid</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={emailInput}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailInputIsInvalid && <p>Email is invalid</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phoneInput}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          ></input>
          {phoneInputIsInvalid && <p>Phone is invalid</p>}
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
          {textInputIsInvalid && <p>Text is invalid</p>}
        </div>
        <div>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;

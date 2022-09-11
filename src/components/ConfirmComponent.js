import "../scss/confirm.style.scss";

import SuccesIcon from "../icons/success.svg";

const ConfirmComponent = ({ resetForm }) => {
  return (
    <div className="confirm">
      <div className="confirm__content">
        <div className="confirm__header">
          <img src={SuccesIcon} alt="success icon" className="confirm__icon" />
        </div>
        <div className="confirm__body">
          <h1 className="confirm__heading">Fist bump!</h1>
          <p className="confirm__message">Is this the end...?</p>
          <button
            className="confirm__button"
            onClick={() => {
              resetForm(false);
            }}
          >
            Send new form
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmComponent;

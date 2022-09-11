import "../scss/error-message.styles.scss";

const ErrorMessage = ({ children }) => {
  return <p className="error-message">{children}</p>;
};

export default ErrorMessage;

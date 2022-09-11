import "./loading.styles.scss";

const LoadingComponent = ({ children }) => {
  return (
    <div className="modal modal__container">
      <div className="modal__content">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="">{children}</p>
      </div>
    </div>
  );
};

export default LoadingComponent;

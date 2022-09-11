import "./loading.styles.scss";

const LoadingComponent = () => {
  return (
    <div className="modal modal__container">
      <div className="modal__content">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="">Please wait form is being validated...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;

import "./ErrorModal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <>
      <div className="backdrop"></div>
    </>
  );
};


const Modal = (props) => {
  return (
    <>
      <card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button className="actions-button" onClick={props.confirm}>Okay</button>
          &nbsp;&nbsp;
          <button className="actions-button" onClick={props.cancel}>Cancel</button>
        </footer>
      </card>
    </>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal title={props.title} message={props.message} cancel={props.onCancel} confirm={props.onConfirm} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ErrorModal;

import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <div
          className={classes.backdrop}
          onClick={() => {
            props.closeModal(false);
          }}
        />,
        portalElement
      )}
      {ReactDom.createPortal(
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;

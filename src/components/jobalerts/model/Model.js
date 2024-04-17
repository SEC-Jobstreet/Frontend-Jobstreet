import { createPortal } from "react-dom";

import DismissIcon from "../../../assets/svg/dismiss_icon.svg";

import "./styles.css";

function Overlay(props) {
  const { onHideModelHandler } = props;
  return <div id="overlay" onClick={onHideModelHandler} aria-hidden="true" />;
}

function Foreground(props) {
  const { children, onHideModelHandler } = props;
  return (
    <div id="foreground">
      <div className="model-wrapper">
        <div className="dismiss">
          <img
            src={DismissIcon}
            alt="dismiss icon svg"
            onClick={onHideModelHandler}
            aria-hidden="true"
            style={{ cursor: "pointer" }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Model(props) {
  const { children, onHideModelHandler } = props;
  return (
    <>
      {createPortal(
        <Overlay onHideModelHandler={onHideModelHandler} />,
        document.getElementById("overlay-root")
      )}
      {createPortal(
        <Foreground onHideModelHandler={onHideModelHandler}>
          {children}
        </Foreground>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

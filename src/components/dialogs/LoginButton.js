import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import Employee from "./Employee";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginButton() {
  const [show, setShow] = useState(false);
  const [employee, setemployee] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleButtonClicked = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the modal
  };

  return (
    <div>
      <div style={{ position: "absolute", top: 20, right: 300 }}>
        <Button variant="light" onClick={handleShow}>
          Đăng nhập
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} style={{ maxWidth: "1600px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <p>Bạn là ứng viên hay nhà tuyển dụng</p>
            </div>
            <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Button
                variant="success"
                onClick={(event) => {
                  handleButtonClicked(event);
                  setemployee(true);
                  handleClose();
                }}
                style={{ width: "100%" }}
              >
                Ứng Viên
              </Button>
            </div>
            <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Button
                variant="light"
                onClick={(event) => {
                  handleButtonClicked(event);
                  window.open("https://www.google.com/", "_blank");
                }}
                style={{ width: "100%", borderColor: "gray" }}
              >
                Nhà Tuyển Dụng
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Employee employee={employee} setemployee={setemployee} />
    </div>
  );
}

export default LoginButton;

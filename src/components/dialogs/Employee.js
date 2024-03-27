import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

import PendingDialog from "./PendingDialog";

import "bootstrap/dist/css/bootstrap.min.css";

function Employee({ employee, setemployee }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setRespone] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleClose = () => {
    setemployee(false);
  };

  const handleButtonClicked = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the modal
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      setRespone(await axios.post("/login", { email, password }));
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      <Modal
        show={employee}
        onHide={handleClose}
        style={{
          maxWidth: "1600px",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Ứng viên tìm việc đăng nhập
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Nhập email của bạn"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Nhập mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <Button
                  variant="success"
                  onClick={(event) => {
                    handleButtonClicked(event);
                    setPending(true);
                    handleClose();
                  }}
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Đăng nhập
                </Button>
              </div>
              <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <Button
                  variant="light"
                  onClick={(event) => {
                    handleButtonClicked(event);
                    window.location.href = "/forget";
                  }}
                  style={{ width: "100%", borderColor: "gray" }}
                >
                  Quên mật khẩu
                </Button>
              </div>
            </Form>
          </div>
          <div />
          <div>
            <p>
              Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý với
              <a href="/terms"> Các điều khoản và điều kiện sử dụng </a>
              và
              <a href="/policy"> Chính Sách Bảo Mật </a>
              của JobStreet.
            </p>
            <p>Bạn chưa có tài khoản JobStreet? Đăng ký dùng,</p>
          </div>
        </Modal.Body>
      </Modal>
      <PendingDialog
        showModal={pending}
        setShowModal={setPending}
        response={response}
        setResponse={setRespone}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default Employee;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
      }}
    >
      <Button variant="success" onClick={handleToggle}>
        Login
      </Button>

      {show && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5,
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            width: "300px",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            Ứng viên tìm việc đăng nhập
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={handleEmailChange}
                className="mb-3"
                isInvalid={
                  !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
                }
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ marginTop: "-15px" }}
              >
                Vui lòng nhập đúng email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={handlePasswordChange}
                className="mb-3"
                isInvalid={password.length < 7}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ marginTop: "-15px" }}
              >
                Nhập tối thiểu 7 ký tự.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mb-3 mt-3">
              Login
            </Button>

            <Button variant="secondary" type="button" className="w-100 mb-3">
              Forgot password
            </Button>

            <p style={{ fontSize: "0.7rem" }}>
              Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý với Các điều
              khoản và điều kiện sử dụng và Chính Sách Bảo Mật của JobStreet.
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
              Bạn chưa có tài khoản JobStreet? Đăng ký dùng,
            </p>

            <div className="d-flex justify-content-between">
              <img
                src="/images/jobstreet_logo.png"
                alt="Logo 2"
                style={{ borderRadius: "50%", width: "30px", height: "30px" }}
              />
              <img
                src="/images/facebook_logo.png"
                alt="Logo 2"
                style={{ borderRadius: "50%", width: "30px", height: "30px" }}
              />
              <img
                src="/images/apple_logo.png"
                alt="Logo 2"
                style={{ borderRadius: "50%", width: "40px", height: "30px" }}
              />
              <img
                src="/images/google_logo.png"
                alt="Logo 2"
                style={{ borderRadius: "50%", width: "30px", height: "30px" }}
              />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Login;

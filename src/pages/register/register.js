/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import "./register-style.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
  };

  return (
    <div className="register-widget">
      <div className="register-container">
        <h3 className="register-title">Tạo tài khoản</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="email"
                className="form-control email"
                placeholder="Nhập email của bạn"
                name="user[email]"
                id="register_widget_user_email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <input
                type="password"
                className="form-control password"
                id="register_widget_user_password"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
          </div>
          <button className="rounded-button-primary btn-sign-in">
            Tạo tài khoản mới
          </button>
          <div className="privacy-statement">
            <span className="branded-links">
              Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý với{" "}
              <a href="#">Các điều khoản và điều kiện sử dụng</a> và{" "}
              <a href="#">Chính Sách Bảo Mật</a> của JobStreet.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

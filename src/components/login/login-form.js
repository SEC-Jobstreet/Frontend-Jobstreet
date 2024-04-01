/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import "./style.css";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
  };

  return (
    <div className="login-widget">
      <div className="login-container">
        <h3 className="login-title">Ứng viên tìm việc đăng nhập</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="email"
                className="form-control email"
                placeholder="Nhập email của bạn"
                name="user[email]"
                id="login_widget_user_email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <input
                type="password"
                className="form-control password"
                id="password"
                placeholder="Mật khẩu"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Đăng nhập
          </button>
          <div className="text-center">
            <a href="#" className="btn btn-link">
              Quên mật khẩu?
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  fill="#1c1c1c"
                />
                <path
                  d="M19.9279 32.3505C19.7078 32.3505 19.1031 32.6254 19.1031 33.1753C19.1031 33.7251 19.7078 34 19.9279 34H28.3815C28.6101 34 29.2062 33.7251 29.2062 33.1753C29.2062 32.6254 28.6101 32.3505 28.3815 32.3505H19.9279Z"
                  fill="#0e8136"
                />
                <path
                  d="M29.2915 14.0019H27.6905C27.2489 13.9816 26.8723 14.1246 26.5606 14.4308C26.093 14.8901 25.9399 15.1491 25.9399 15.7963C25.9399 16.2278 25.9399 19.7091 25.9399 26.2403C25.7903 27.3775 25.1412 27.9461 23.9926 27.9461C22.844 27.9461 22.2263 27.3775 22.1395 26.2403V24.1952H19.0001C19.0001 25.1108 19.0001 25.9021 19.0001 26.5691C19.0001 27.5695 19.0377 30.6078 23.9926 30.4916C28.9475 30.3754 29.2915 27.5894 29.2915 26.5691C29.2915 25.8889 29.2915 21.6998 29.2915 14.0019Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

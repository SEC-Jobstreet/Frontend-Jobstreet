import React, { useState } from "react";
import {
  IoBookmarkOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";

import "./Navigation.scss";

function Navigation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowLoginBox, setIsShowLoginBox] = useState(false);
  const [isShowLoginForm, setIsShowLoginForm] = useState(true);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const handleOnClickLoginButton = () => {
    if (email !== "user@gmail.com") setMessage("Email không chính xác");
    else if (password !== "123456") setMessage("Mật khẩu không chính xác");
    else {
      localStorage.setItem("isLogin", true);
      setEmail("");
      setPassword("");
      setIsShowLoginBox(false);
      setIsShowLoginForm(false);
      setMessage("");
      setIsLogin(true);
    }
  };

  const handleOnClickLogoutButton = () => {
    localStorage.setItem("isLogin", false);
    setIsLogin(false);
  };

  return (
    <header>
      <div className="navigation-container">
        <div className="nav-left-content">
          <a href="/" title="JobStreet">
            JobStreet
          </a>
        </div>
        <div className="nav-right-content">
          {!isLogin ? (
            <>
              <button
                className="nav-button"
                type="button"
                onClick={() => setIsShowLoginBox(!isShowLoginBox)}
              >
                Đăng nhập
              </button>
              <div
                className={
                  isShowLoginBox
                    ? "login-box login-box-show"
                    : "login-box login-box-hide"
                }
              >
                <div className="login-container">
                  {!isShowLoginForm ? (
                    <>
                      <h3>Đăng nhập</h3>
                      <span>Bạn là ứng viên tìm việc hay nhà tuyển dụng?</span>
                      <button
                        className="above-button"
                        type="button"
                        onClick={() => setIsShowLoginForm(true)}
                      >
                        Ứng viên
                      </button>
                      <a
                        className="below-button"
                        href="https://employer.jobstreet.vn/vn/login?utm_source=jora&utm_medium=referral&utm_content=header_link&utm_campaign=header_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Nhà tuyển dụng
                      </a>
                    </>
                  ) : (
                    <>
                      <h3>Ứng viên tìm việc đăng nhập</h3>
                      <div className="login-form">
                        <input
                          data-testid="email-input"
                          type="email"
                          value={email}
                          placeholder="Nhập email của bạn"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                          data-testid="password-input"
                          type="password"
                          value={password}
                          placeholder="Nhập mật khẩu"
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="login-message">
                          <p>{message}</p>
                        </div>
                        <button
                          className="above-button"
                          data-testid="login"
                          type="button"
                          onClick={handleOnClickLoginButton}
                        >
                          Đăng nhập
                        </button>

                        <a className="below-button" href="/">
                          Quên mật khẩu
                        </a>
                      </div>
                      <div className="privacy-statement">
                        <p>
                          Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý
                          với{" "}
                          <a
                            href="https://www.jobstreet.vn/cms/dieu-khoan-su-dung"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Các điều khoản và điều kiện sử dụng
                          </a>{" "}
                          và{" "}
                          <a
                            href="https://www.jobstreet.vn/cms/chinh-sach-bao-mat"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Chính Sách Bảo Mật
                          </a>{" "}
                          của JobStreet.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <span>
                <i>
                  <IoPersonOutline />
                </i>
                <a className="nav-link" href="/">
                  Hồ sơ cá nhân
                </a>
              </span>
              <span>
                <i>
                  <IoNotificationsOutline />
                </i>
                <a className="nav-link" href="/">
                  Thông báo việc
                </a>
              </span>
              <span>
                <i>
                  <IoBookmarkOutline />
                </i>
                <a className="nav-link" href="/">
                  Việc của tôi
                </a>
              </span>
              <button
                className="nav-button"
                type="button"
                data-testid="logout"
                onClick={handleOnClickLogoutButton}
              >
                Thoát
              </button>
            </>
          )}
          <a
            className="employer-link"
            href="https://employer.jobstreet.vn/vn/login?utm_source=jora&utm_medium=referral&utm_content=header_link&utm_campaign=header_link"
            target="_blank"
            rel="noreferrer"
          >
            Truy cập trang web của nhà tuyển dụng
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

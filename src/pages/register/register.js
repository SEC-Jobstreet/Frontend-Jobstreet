import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { autoSignIn, fetchAuthSession, signUp } from "aws-amplify/auth";

import { setNotification } from "../../store/notification";
import { loginAccount } from "../../store/user";
import { notiRegister } from "../../utils/notification";

import "./register-style.css";

function Register() {
  const dispatch = useDispatch();
  const [emailVerification, setEmailVerification] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const validateEmail = (email1) =>
    String(email1)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.trim().length >= 6;

    if (!isEmailValid) setEmailError("Địa chỉ email không hợp lệ");
    setPasswordError(password.trim() === "");
    setPasswordLengthError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      // Handle the form submission
      try {
        await signUp({
          username: email,
          password,
          options: {
            autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
          },
        });

        setEmailVerification(true);

        const signInOutput = await autoSignIn();
        if (signInOutput.isSignedIn) {
          const { tokens } = await fetchAuthSession({ forceRefresh: true });
          console.log(tokens);
          dispatch(loginAccount({ email, email_verified: false }));
          dispatch(setNotification(notiRegister));
        }
      } catch (error) {
        setEmailError("Địa chỉ email đã có");
        console.log("error signing up:", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Tạo tài khoản | JobStreet</title>
      </Helmet>
      <div className="register-widget">
        <div className="register-container">
          <h3 className="register-title">Tạo tài khoản</h3>
          {!emailVerification ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control email ${emailError !== "" ? "is-invalid" : ""}`}
                    placeholder="Nhập email của bạn"
                    name="user[email]"
                    id="register_widget_user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError !== "" && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="password"
                    className={`form-control password ${passwordError || passwordLengthError ? "is-invalid" : ""}`}
                    id="register_widget_user_password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {passwordError && (
                    <div className="invalid-feedback">
                      Mật khẩu không thể để trắng
                    </div>
                  )}
                  {passwordLengthError && (
                    <div className="invalid-feedback">
                      Mật khẩu quá ngắn (tối thiểu 6 ký tự)
                    </div>
                  )}
                </div>
              </div>
              <button
                className="rounded-button-primary btn-sign-in"
                type="submit"
              >
                Tạo tài khoản mới
              </button>
              <div className="privacy-statement">
                <span className="branded-links">
                  Bằng cách tạo tài khoản, bạn đồng ý với{" "}
                  <a href="/">Các điều khoản và điều kiện sử dụng</a> và{" "}
                  <a href="/">Chính Sách Bảo Mật</a> của JobStreet.
                </span>
              </div>
            </form>
          ) : (
            <p>
              Bấm vào đường link trong email gửi đến <b>{email}</b> để xác nhận
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;

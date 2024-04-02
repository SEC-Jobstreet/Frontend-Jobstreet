/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CandidateLogin from "../../components/login/candidate-login";
import { loginAccount, selectUser } from "../../store/user";

import "../../components/login/login-style.css";

function Login({ onClose = () => {}, show = false }) {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const navigate = useNavigate();

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    // Test with static email
    const userEmail = "user@example.com";
    dispatch(loginAccount({ email: userEmail }));
  };

  const [shouldAddListener, setShouldAddListener] = useState(
    window.innerWidth >= 768
  );

  const handleRoleSelection = (role) => {
    sessionStorage.setItem("role", role);
    setIsLoginVisible(role === "candidate"); // Show the login form if role is candidate
  };

  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      onClose(); // Close the login form
    }
  };

  const handleCreateAccountClick = () => {
    navigate("/register"); // Navigate to the Register page
  };

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role === "candidate") {
      setIsLoginVisible(true);
    }

    const updateListener = () => {
      setShouldAddListener(window.innerWidth >= 768);
    };
    window.addEventListener("resize", updateListener);

    if (shouldAddListener) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("resize", updateListener);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shouldAddListener, onClose]);

  return (
    <div className={`login-widget ${show ? "active" : ""}`} ref={loginRef}>
      {isLoginVisible ? (
        <CandidateLogin onClose={onClose} />
      ) : (
        <div className="role-selection-container">
          <h3 className="login-title">Đăng nhập</h3>
          <p className="mb-24">Bạn là ứng viên tìm việc hay nhà tuyển dụng?</p>
          <button
            className="rounded-button-primary btn-sign-up mb-24"
            onClick={() => handleRoleSelection("candidate")}
          >
            Ứng Viên
          </button>
          <button
            className="rounded-button-primary btn-forgot-pw"
            onClick={() => handleRoleSelection("employer")}
          >
            Nhà Tuyển Dụng
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;

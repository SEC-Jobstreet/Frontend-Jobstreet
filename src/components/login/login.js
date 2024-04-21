import React, { useEffect, useRef } from "react";

import CandidateEmployer from "./candidate-employer";
import CandidateLogin from "./candidate-login";

import "./login-style.css";

function Login({ open, setOpen }) {
  const loginRef = useRef();

  const handleClickOutside = (event) => {
    event.stopPropagation();
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  console.log(open);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="login-widget login-widget-from-nav"
      ref={loginRef}
      style={open ? { display: "block" } : { display: "none" }}
    >
      <CandidateEmployer />
      <CandidateLogin />
    </div>
  );
}

export default Login;

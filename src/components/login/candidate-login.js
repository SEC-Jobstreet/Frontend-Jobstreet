import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { setNotification } from "../../store/notification";
import { loginAccount } from "../../store/user";
import { notiLoginAccount } from "../../utils/notification";

import "./login-style.css";

function CandidateLogin({ isPage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    // After verify
    const temp = document.querySelector(".login-widget-from-nav");
    if (temp) temp.style.display = "none";

    const IDToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDM0NzE3NTUyNDEta2NkOGpmZXZrMnRwMDk3YXZqZjVpN2NsbnVqZHMybGEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDM0NzE3NTUyNDEta2NkOGpmZXZrMnRwMDk3YXZqZjVpN2NsbnVqZHMybGEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDYwMzE3MDQ4OTczNjcwNDk3ODciLCJlbWFpbCI6InRoYW5ocXV5MTEwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImNqZFdMYmJ5V1lHLU9oZVJUTUxNMmciLCJuYW1lIjoiUXXDvSBQaGFuIFbEg24gVGjDoG5oIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tJdkpOYjhGdFQ5Z0d3U2FVaHdkQnBUaEdTU0pzYjNnQ0JrazRoZXc3SlBKUDBTa2pRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlF1w70iLCJmYW1pbHlfbmFtZSI6IlBoYW4gVsSDbiBUaMOgbmgiLCJpYXQiOjE3MTMzMzczOTMsImV4cCI6MTcyMzM0MDk5M30._8akrJSzTTrF0C7zx68gg_vVuarmxPnxR13P_ROjt2E";
    Cookies.set(
      "access_token",
      "ya29.a0Ad52N39xe9rMzhmQNxezsngZantnr7XAToWFRjqe-VTQVx50BcAtxUsxcivNIARtgsmq0ZvwBzvSrkSaXDVq6Qz1pC5QXJQWSU4_pMnJysG5mWNdhHZHtOZQ9QidjhPVM0sB4SI1bi-l7TdLg1fPDyIxxzTYG6jQYMw8aCgYKAQcSARISFQHGX2MiWmFTKnCvII24ybn8ord5Yw0171"
    );
    Cookies.set(
      "refresh_token",
      "1//0edPttP6Z4BADCgYIARAAGA4SNwF-L9IrDVO2ngFM3PKHx9fkCCzPz3C9v41Bjc-hZtf3Eoc-v2hRehgj-JLrHPx5EIhlysjPbF4"
    );
    Cookies.set("IDToken", IDToken);
    const data = jwtDecode(IDToken);
    dispatch(loginAccount(data));
    dispatch(setNotification(notiLoginAccount));
  };

  const handleCreateAccountClick = () => {
    const temp = document.querySelector(".login-widget-from-nav");
    if (temp) temp.style.display = "none";
    navigate("/register"); // Navigate to the Register page
  };

  return (
    <div className={`login-container ${isPage ? "custom-login-class" : ""}`}>
      <h3 className="login-title">Ứng viên tìm việc đăng nhập</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="email"
              className="form-control email"
              placeholder="Nhập email của bạn"
              name="user[email]"
              id={`login_widget_user_email ${isPage ? "page" : ""}`}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <input
              type="password"
              className="form-control password"
              id={`login_widget_user_password ${isPage ? "page" : ""}`}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className={`rounded-button-primary btn-sign-up ${isPage ? "my-signin-button-class" : ""}`}
        >
          Đăng nhập
        </button>
        <button
          type="button"
          className={`rounded-button-primary btn-forgot-pw ${isPage ? "my-forgot-pw-button-class" : ""}`}
        >
          Quên mật khẩu
        </button>
        <div className="privacy-statement">
          <span className="branded-links">
            Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý với{" "}
            <NavLink to="/">Các điều khoản và điều kiện sử dụng</NavLink> và{" "}
            <NavLink to="/">Chính Sách Bảo Mật</NavLink> của JobStreet.
          </span>
        </div>
        <h3 className="login-title sign-up">
          Bạn chưa có tài khoản JobStreet? Đăng ký dùng,
        </h3>
        <div className="social-login-container">
          <NavLink
            className="jora-sign-up"
            to="/register"
            onClick={handleCreateAccountClick}
          >
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
            <div className="heading-xsmall social-login-text">
              Tạo tài khoản
            </div>
          </NavLink>
          <a className="facebook-login" to="/">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM27.2659 14C24.4273 14 22.572 15.7204 22.572 18.835V21.5728H19.4167V25.165H22.572V33.849C23.2047 33.9483 23.8532 34 24.5138 34C25.1743 34 25.8228 33.9483 26.4555 33.849V25.165H29.3511L29.9021 21.5728H26.4555V19.2417C26.4555 18.2589 26.9369 17.301 28.4807 17.301H30.0477V14.2427C30.0477 14.2427 28.6256 14 27.2659 14Z"
                fill="#3B5998"
              />
            </svg>
            <div className="heading-xsmall social-login-text">Facebook</div>
          </a>
          <a className="apple-login" to="/">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.0001 24C44.0001 12.9543 35.0458 4 24.0001 4C12.9544 4 4.00006 12.9543 4.00006 24C4.00006 35.0457 12.9544 44 24.0001 44C35.0458 44 44.0001 35.0457 44.0001 24Z"
                fill="black"
              />
              <path
                d="M24.1856 18.4872C24.879 18.4872 25.7481 18.004 26.2657 17.3598C26.7344 16.776 27.0762 15.9607 27.0762 15.1454C27.0762 15.0347 27.0665 14.9239 27.0469 14.8333C26.2755 14.8635 25.3477 15.3668 24.7911 16.0412C24.3516 16.5546 23.9512 17.3598 23.9512 18.1852C23.9512 18.306 23.9708 18.4268 23.9805 18.4671C24.0294 18.4771 24.1075 18.4872 24.1856 18.4872ZM21.7442 30.6667C22.6915 30.6667 23.1114 30.0124 24.293 30.0124C25.4942 30.0124 25.7579 30.6465 26.8126 30.6465C27.8477 30.6465 28.5411 29.6601 29.1954 28.6938C29.9278 27.5866 30.2305 26.4995 30.2501 26.4492C30.1817 26.429 28.1993 25.5936 28.1993 23.2483C28.1993 21.215 29.7618 20.299 29.8497 20.2286C28.8145 18.6986 27.2422 18.6583 26.8126 18.6583C25.6505 18.6583 24.7032 19.383 24.1075 19.383C23.463 19.383 22.6133 18.6986 21.6075 18.6986C19.6934 18.6986 17.7501 20.3292 17.7501 23.4093C17.7501 25.3218 18.4727 27.345 19.3614 28.6535C20.1231 29.7608 20.7872 30.6667 21.7442 30.6667Z"
                fill="white"
              />
            </svg>
            <div className="heading-xsmall social-login-text">Apple</div>
          </a>
          <a
            className="google-login"
            href={`${process.env.REACT_APP_BACKEND_CANDIDATE_SERVICE_ADDRESS}/oauth/google?current_url=${encodeURIComponent(window.location.href)}`}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill="#F7F7F7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.64 24.205C32.64 23.566 32.583 22.953 32.476 22.364H24V25.845H28.844C28.635 26.97 28.001 27.923 27.048 28.561V30.82H29.956C31.658 29.253 32.64 26.945 32.64 24.205Z"
                fill="#4285F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 33C26.43 33 28.467 32.194 29.956 30.82L27.048 28.561C26.242 29.101 25.211 29.421 24 29.421C21.656 29.421 19.672 27.837 18.964 25.71H15.957V28.042C17.438 30.983 20.482 33 24 33Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.964 25.71C18.784 25.17 18.682 24.593 18.682 24C18.682 23.407 18.784 22.83 18.964 22.29V19.958H15.957C15.347 21.173 15 22.548 15 24C15 25.452 15.348 26.827 15.957 28.042L18.964 25.71Z"
                fill="#FBBC05"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 18.58C25.321 18.58 26.508 19.034 27.44 19.925L30.022 17.345C28.463 15.891 26.426 15 24 15C20.482 15 17.438 17.017 15.957 19.958L18.964 22.29C19.672 20.163 21.656 18.58 24 18.58Z"
                fill="#EA4335"
              />
            </svg>
            <div className="heading-xsmall social-login-text">Google</div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default CandidateLogin;

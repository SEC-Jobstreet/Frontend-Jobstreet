import { NavLink, useLocation } from "react-router-dom";

import "./myaccount-style.css";

function MyAccount() {
  const currentPage = useLocation().pathname;

  // Hàm xác định NavLink nào là active dựa trên currentPage
  const determineActive = (path) => {
    if (currentPage === "/account" && path === "/account/profile") return true;
    return currentPage === path;
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h4 className="sidebar-header mb-3">Tài khoản</h4>
        <NavLink
          to="/account/profile"
          className={`nav-item nav-link ${determineActive("/account/profile") ? "active" : ""}`}
        >
          Hồ sơ cá nhân
        </NavLink>
        <NavLink
          to="/account/job_alerts"
          className={`nav-item nav-link ${determineActive("/account/job_alerts") ? "active" : ""}`}
        >
          Thông báo việc
        </NavLink>
        <NavLink
          to="/account/saved_jobs"
          className={`nav-item nav-link ${determineActive("/account/saved_jobs") ? "active" : ""}`}
        >
          Việc của tôi
        </NavLink>
        <NavLink
          to="/account/settings"
          className={`nav-item nav-link ${determineActive("/account/settings") ? "active" : ""}`}
        >
          Cài đặt
        </NavLink>
        <NavLink
          to="/account/deletion_confirmation"
          className={`nav-item nav-link ${determineActive("/account/deletion_confirmation") ? "active" : ""}`}
        >
          Xoá tài khoản
        </NavLink>
      </div>
      <div className="main-content"> </div>
    </div>
  );
}

export default MyAccount;

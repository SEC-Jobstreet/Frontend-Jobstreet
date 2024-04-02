import { NavLink } from "react-router-dom";
import { Mail } from "lucide-react";

import "./jobalerts.css";

function JobsAlerts() {
  return (
    <div className="my-account-page content-container -width-xl grid-container -three-columns">
      {/* desktop */}
      <div className="my-account-left-pane grid-left-pane">
        <div className="destop-account-tabs">
          <h3 className="heading-small -no-margin-bottom tab-header">
            Tài khoản của tôi
          </h3>
          <NavLink to="/account/profile" className="profile-tab tab-link">
            Hồ sơ cá nhân
          </NavLink>
          <NavLink
            to="/account/job_alerts"
            className="profile-tab tab-link -active"
          >
            Thông báo việc
          </NavLink>

          <NavLink to="/account/saved_jobs" className="profile-tab tab-link">
            Việc của tôi
          </NavLink>

          <NavLink to="/account" className="profile-tab tab-link">
            Settings
          </NavLink>

          <NavLink
            to="/account/deletion_confirmation"
            className="profile-tab tab-link"
          >
            Xoá tài khoản
          </NavLink>
        </div>
      </div>

      {/* content */}
      <div className="my-account-content grid-content">
        <h3 className="heading-large account-page-heading">Thông báo việc</h3>
        {/* mobile */}
        <div className="mobile-account-tabs tabs-container">
          <NavLink to="/account/profile" className="profile-tab tab">
            Hồ sơ cá nhân
          </NavLink>
          <NavLink to="/account/job_alerts" className="profile-tab tab -active">
            Thông báo việc
          </NavLink>

          <NavLink to="/account/saved_jobs" className="profile-tab tab">
            Việc của tôi
          </NavLink>

          <NavLink to="/account" className="profile-tab tab">
            Settings
          </NavLink>

          <NavLink
            to="/account/deletion_confirmation"
            className="profile-tab tab"
          >
            Xoá tài khoản
          </NavLink>
        </div>
        <div id="unconfirm-email">
          <h3 className="heading-large text-label">
            <Mail className="mail-label" />
            Địa chỉ email của bạn chưa được xác nhận
          </h3>
          <p>
            Xin bấm vào đường link trong email gửi đến{" "}
            <strong>hosiduc2002.chem@gmail.com</strong>
          </p>
          <form method="POST">
            <input type="hidden" />
            <input type="hidden" name="authenticity-token" />
            <input
              type="submit"
              name="commit"
              value="Gửi lại email xác thức"
              className="button quinary resend-confirmation-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobsAlerts;

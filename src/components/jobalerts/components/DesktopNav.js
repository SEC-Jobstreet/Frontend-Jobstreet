import { NavLink } from "react-router-dom";

export default function DesktopNav() {
  return (
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
  );
}

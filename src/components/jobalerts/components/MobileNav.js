import { NavLink } from "react-router-dom";

export default function MobileNav() {
  return (
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

      <NavLink to="/account/deletion_confirmation" className="profile-tab tab">
        Xoá tài khoản
      </NavLink>
    </div>
  );
}

import { Button, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import {
  IoBookmarkOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { loginAccout, logoutAccout, selectUser } from "../../store/user";

import "./appnav.css";

const logo = require("../../assets/svg/logo.svg").default;

function NavBar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="header">
      <Navbar>
        <Navbar.Brand as={Link} to="/" className="logo-page-header">
          <img
            src={logo}
            alt="logo-jobstreet"
            style={{ width: "14rem", height: "2.4rem" }}
          />
        </Navbar.Brand>
        <Navbar.Collapse className="rightGroup">
          {user.email === "" ? (
            <button
              type="button"
              className="login"
              onClick={() => dispatch(loginAccout({ email: "a@email.com" }))}
            >
              <span>Đăng nhập</span>
            </button>
          ) : (
            <>
              <Nav className="p-0">
                <NavItem eventkey={1} href="/profile">
                  <NavLink className="nav-link" to="/account/profile" as={Link}>
                    <IoPersonOutline className="nav-icon" /> Hồ sơ cá nhân
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="p-0">
                <NavItem eventkey={2} href="/job_alerts">
                  <NavLink
                    className="nav-link"
                    to="/account/job_alerts"
                    as={Link}
                  >
                    <IoNotificationsOutline className="nav-icon" /> Thông báo
                    việc
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="p-0">
                <NavItem eventkey={3} href="/saved_jobs">
                  <NavLink
                    className="nav-link"
                    to="/account/saved_jobs"
                    as={Link}
                  >
                    <IoBookmarkOutline className="nav-icon" /> Việc của tôi
                  </NavLink>
                </NavItem>
              </Nav>
              <button
                type="button"
                className="logout"
                onClick={() => {
                  dispatch(logoutAccout());
                  navigate("/");
                }}
              >
                <span>Thoát</span>
              </button>
            </>
          )}

          <a href="/">
            <Button
              type="button"
              className="button-employer"
              variant="outline-success"
            >
              Truy cập trang web của nhà tuyển dụng
            </Button>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

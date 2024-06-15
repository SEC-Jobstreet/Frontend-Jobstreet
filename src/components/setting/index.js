import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectUser } from "../../store/user";

import "./index.css";

function Setting() {
  const user = useSelector(selectUser);
  return (
    <>
      <Helmet>
        <title>Hồ sơ cá nhân | JobStreet</title>
      </Helmet>
      <div className="contSetting">
        <p className="titleSetting">Settings</p>
        <p>{user?.email}</p>
        <p>*********</p>
        <NavLink to="/account/edit-setting">
          <button type="button" className="btnSetting">
            Edit settings
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Setting;

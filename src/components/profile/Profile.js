import { useEffect, useState } from "react";
import { getCountryCallingCode } from "react-phone-number-input";
import { useLocation, useNavigate } from "react-router-dom";

import CheckMark from "../../assets/svg/check-mark-black.svg";
import Citizen from "../../assets/svg/citizen-id-icon-black.svg";
import Document from "../../assets/svg/document-icon-black.svg";
import EditIcon from "../../assets/svg/edit_icon.svg";
import Unprivate from "../../assets/svg/eye-icon-balck.svg";
import Location from "../../assets/svg/location-icon-black.svg";
import Note from "../../assets/svg/note-icon-black.svg";
import Phone from "../../assets/svg/phone_icon_black.svg";
import Private from "../../assets/svg/privite-icon-black.svg";
import { getProfile } from "../../services/configAPI";

import TimeAvailabel from "./timeavailable";

import "./Profile.css";

function getFirstCharacter(str) {
  let result = "";
  const arrayStr = str.split(" ");
  result += arrayStr.map((item) => item.slice(0, 1));
  if (result) {
    return result.replace(",", "");
  }
  return "A";
}

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCandidateProfile = async () => {
      const response = await getProfile();
      console.log(response);
      if (response.status === 200) {
        const temp = response.data;
        temp.WorkShift = JSON.parse(temp.WorkShift);
        setData(temp);
      } else {
        navigate("/account/profile/edit", { state: { from: location } });
      }
    };
    getCandidateProfile();
  }, []);

  if (data != null) {
    const postedTimeByYear = Math.round(
      (new Date().getTime() -
        new Date(parseInt(data.StartDate, 10) * 1000).getTime()) /
        (1000 * 3600 * 24 * 30 * 365)
    );

    const postedTimeByMonth = Math.round(
      (new Date().getTime() -
        new Date(parseInt(data.StartDate, 10) * 1000).getTime()) /
        (1000 * 3600 * 24 * 30)
    );

    return (
      <div style={{ marginTop: "1rem" }}>
        <div style={{ position: "relative" }}>
          <div className="profile-icon-container">
            <div className="profile-icon">
              {data.last_name && getFirstCharacter(data.last_name)}
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate("edit")}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              border: "none",
              background: "white",
            }}
          >
            <img src={EditIcon} alt="edit-profile-icon" />
          </button>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div className="profile-info-item">
            <div className="profile-title">{`${data.first_name} ${data.last_name}`}</div>
          </div>
          <div className="profile-info-item">
            <p>{data.Description}</p>
          </div>
          <div className="profile-info-item">
            <div className="img-container">
              <img
                src={Phone}
                alt="profile-description-icon"
                style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
              />
            </div>
            <div>
              +{getCountryCallingCode(data.CountryPhone)}
              {data.Phone}
            </div>
          </div>
          <div className="profile-info-item">
            <div>
              <img
                src={Location}
                alt="profile-description-icon"
                style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
              />
            </div>
            <div>{data.Address}</div>
          </div>
          <div className="profile-info-item">
            <div>
              <img
                src={data.Visa ? CheckMark : Citizen}
                alt="profile-description-icon"
                style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
              />
            </div>
            {data.Visa ? (
              <div>
                Tôi là Công dân, Thường trú nhân hoặc có tư cách tương tự ở Việt
                Nam và sẽ không cần Nhà tuyển dụng nộp đơn xin giấy phép lao
                động/giấy phép/visa cho tôi.
              </div>
            ) : (
              <div>
                Tôi{" "}
                <p style={{ fontWeight: "bold", display: "inline" }}>
                  không phải
                </p>{" "}
                là Công dân hay Thường trú nhân của Việt Nam và tôi cần Nhà
                tuyển dụng nộp đơn xin giấy phép lao động/giấy phép/visa cho
                tôi.
              </div>
            )}
          </div>
        </div>
        <hr className="separator" />
        {/* time availabel of employee */}
        <TimeAvailabel particularTime={data.WorkShift} />
        {/* job title */}
        <hr className="separator" />
        <div style={{ marginTop: "1rem" }}>
          <div className="profile-text-container">
            <img src={Note} alt="Chức danh hiện tại - icon" />
            <div>
              <p>{data.CurrentPosition}</p>
              <p className="discription">
                Started{" "}
                {postedTimeByMonth < 12
                  ? `${postedTimeByMonth} month`
                  : `${postedTimeByYear} year`}{" "}
                ago
              </p>
            </div>
          </div>
        </div>
        {/* cv status */}
        <hr className="separator" />
        <div style={{ marginTop: "1rem" }}>
          <div className="profile-text-container">
            <img
              src={data.ShareProfile ? Unprivate : Private}
              alt="Chia sẻ hồ sơ - icon"
            />
            <div>
              {data.ShareProfile ? (
                <p>Chia sẻ hồ sơ</p>
              ) : (
                <p>Không chia sẻ hồ sơ</p>
              )}
            </div>
          </div>
        </div>
        {/* cv */}
        <hr className="separator" />
        <div style={{ marginTop: "1rem", marginBottom: "2.8rem" }}>
          <div className="profile-text-container">
            <img src={Document} alt="CV - icon" />
            <div>
              <p>{data.ResumeName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

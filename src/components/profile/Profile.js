import { useNavigate } from "react-router-dom";

import CheckMark from "../../assets/svg/check-mark-black.svg";
import Citizen from "../../assets/svg/citizen-id-icon-black.svg";
import Document from "../../assets/svg/document-icon-black.svg";
import EditIcon from "../../assets/svg/edit_icon.svg";
import Unprivate from "../../assets/svg/eye-icon-balck.svg";
import Location from "../../assets/svg/location-icon-black.svg";
import Note from "../../assets/svg/note-icon-black.svg";
import Phone from "../../assets/svg/phone_icon_black.svg";
import Private from "../../assets/svg/privite-icon-black.svg";

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
  // user profile - get data from be or state
  const firstName = "Nguyễn";
  const lastName = "Văn A";
  const phoneNumber = "123456789";
  const address = "Quận 1, Tp Hồ Chí Minh";
  const isVNCitizend = true;
  const particularTime = [
    [true, true, true, true, true, false, false],
    [true, true, true, true, true, false, false],
    [false, false, false, false, false, false, false],
  ];
  const jobTitle = "Intern, Fresher";
  const timeStart = 1;
  const isSharedProifle = false;
  const fileCVName = "cv.pdf";

  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ position: "relative" }}>
        <div className="profile-icon-container">
          <div className="profile-icon">
            {lastName && getFirstCharacter(lastName)}
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
          <div className="profile-title">{`${firstName} ${lastName}`}</div>
        </div>
        <div className="profile-info-item">
          <div className="img-container">
            <img
              src={Phone}
              alt="profile-description-icon"
              style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
            />
          </div>
          <div>+84 + {phoneNumber}</div>
        </div>
        <div className="profile-info-item">
          <div>
            <img
              src={Location}
              alt="profile-description-icon"
              style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
            />
          </div>
          <div>{address}</div>
        </div>
        <div className="profile-info-item">
          <div>
            <img
              src={isVNCitizend ? CheckMark : Citizen}
              alt="profile-description-icon"
              style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
            />
          </div>
          {isVNCitizend ? (
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
              là Công dân hay Thường trú nhân của Việt Nam và tôi cần Nhà tuyển
              dụng nộp đơn xin giấy phép lao động/giấy phép/visa cho tôi.
            </div>
          )}
        </div>
      </div>
      <hr className="separator" />
      {/* time availabel of employee */}
      <TimeAvailabel particularTime={particularTime} />
      {/* job title */}
      <hr className="separator" />
      <div style={{ marginTop: "1rem" }}>
        <div className="profile-text-container">
          <img src={Note} alt="Chức danh hiện tại - icon" />
          <div>
            <p>{jobTitle}</p>
            <p className="discription">Started {timeStart} day ago</p>
          </div>
        </div>
      </div>
      {/* cv status */}
      <hr className="separator" />
      <div style={{ marginTop: "1rem" }}>
        <div className="profile-text-container">
          <img
            src={isSharedProifle ? Unprivate : Private}
            alt="Chia sẻ hồ sơ - icon"
          />
          <div>
            {isSharedProifle ? (
              <p>Không chia sẻ hồ sơ</p>
            ) : (
              <p>Chia sẻ hồ sơ</p>
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
            <p>{fileCVName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

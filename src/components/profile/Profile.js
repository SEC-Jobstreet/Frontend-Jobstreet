import CheckMark from "../../assets/svg/check-mark-black.svg";
import Document from "../../assets/svg/document-icon-black.svg";
import EditIcon from "../../assets/svg/edit_icon.svg";
import Location from "../../assets/svg/location-icon-black.svg";
import Note from "../../assets/svg/note-icon-black.svg";
import Phone from "../../assets/svg/phone_icon_black.svg";
import Prive from "../../assets/svg/privite-icon-black.svg";

import TimeAvailabel from "./timeavailable";

import "./Profile.css";

function Profile() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ position: "relative" }}>
        <div className="profile-icon-container">
          <div className="profile-icon">A</div>
        </div>
        <img
          src={EditIcon}
          alt="edit-profile-icon"
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div className="profile-info-item">
          <div className="profile-title">Nguyễn Văn A</div>
        </div>
        <div className="profile-info-item">
          <div className="img-container">
            <img
              src={Phone}
              alt="profile-description-icon"
              style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
            />
          </div>
          <div>+84375127246</div>
        </div>
        <div className="profile-info-item">
          <div>
            <img
              src={Location}
              alt="profile-description-icon"
              style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
            />
          </div>
          <div>Quận 1, Thành phố Hồ Chí Minh, VN</div>
        </div>
        <div className="profile-info-item">
          <div>
            <img
              src={CheckMark}
              alt="profile-description-icon"
              style={{ marginRight: "1.2rem", marginBottom: "0.4rem" }}
            />
          </div>
          <div>
            Tôi là Công dân, Thường trú nhân hoặc có tư cách tương tự ở Việt Nam
            và sẽ không cần Nhà tuyển dụng nộp đơn xin giấy phép lao động/giấy
            phép/visa cho tôi.
          </div>
        </div>
      </div>
      <hr className="separator" />
      {/* time availabel of employee */}
      <TimeAvailabel />
      {/* job title */}
      <hr className="separator" />
      <div style={{ marginTop: "1rem" }}>
        <div className="profile-text-container">
          <img src={Note} alt="Chức danh hiện tại - icon" />
          <div>
            <p>Intern, Fresher</p>
            <p className="discription">Start 1 day ago</p>
          </div>
        </div>
      </div>
      {/* cv status */}
      <hr className="separator" />
      <div style={{ marginTop: "1rem" }}>
        <div className="profile-text-container">
          <img src={Prive} alt="Chia sẻ hồ sơ - icon" />
          <div>
            <p>Không chia sẻ hồ sơ</p>
          </div>
        </div>
      </div>
      {/* cv */}
      <hr className="separator" />
      <div style={{ marginTop: "1rem", marginBottom: "2.8rem" }}>
        <div className="profile-text-container">
          <img src={Document} alt="CV - icon" />
          <div>
            <p>CV.pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

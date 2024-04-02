import { NavLink } from "react-router-dom";

export default function JobAlert() {
  return (
    <div className="alert-item">
      <NavLink to="/" className="alert-title -link-highlight">
        Tuyển dụng, làm việc tại Hồ Chí Minh
      </NavLink>
      <div className="alert-info">
        <span className="alert-frequency">Hằng ngày</span>
        <span className="divider">-</span>
        <span className="alert-status">Kích hoạt</span>
      </div>
      <div className="actions-container">
        <button type="button" className="tertiary">
          Thay đổi
        </button>
        <button type="button" className="tertiary">
          Dừng
        </button>
        <button type="button" className="tertiary">
          Huỷ
        </button>
      </div>
    </div>
  );
}

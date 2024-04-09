import { Link } from "react-router-dom";

import "./styles.css";

export default function CancelReason() {
  return (
    <div
      className="cancel-email-page content-container -width-md -margin-y-md"
      id="email-alert-management-page"
    >
      <h2 className="heading-large">Cảm ơn bạn!</h2>
      <p>Chúng tôi đã nhận được góp ý của bạn.</p>
      <p>
        Bạn có thể <Link to="/">tìm việc làm</Link> hoặc
        <Link to="/account/job-alerts/new"> tạo thông báo việc làm mới</Link>.
      </p>
    </div>
  );
}

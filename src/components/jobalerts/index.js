import { useState } from "react";
import { useNavigate } from "react-router-dom";

import JobAlertData from "../../temp/samplejobalertdata";

import JobAlert from "./components/JobAlert";
import UnComfirmAlert from "./components/UnComfirmAlert";

import "./index.css";

function JobsAlerts() {
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const navigate = useNavigate();
  const uncomfirmHandler = (value) => {
    setIsConfirmEmail(value);
  };

  return (
    <div className="my-account-content grid-content">
      <h3 className="heading-large account-page-heading">Thông báo việc</h3>
      {/* show when email is unconfirm */}
      {!isConfirmEmail && (
        <UnComfirmAlert uncomfirmHandler={uncomfirmHandler} />
      )}
      {/* show job alert when email is confirmed */}
      {isConfirmEmail && JobAlertData && (
        <>
          <div id="email-alerts">
            {JobAlertData.map((item) => (
              <JobAlert key={item.id} title={item.title} />
            ))}
          </div>
          <button
            type="button"
            className="create-alert-button -primary"
            onClick={() => navigate("new")}
          >
            Tạo thông báo việc làm ngay
          </button>
        </>
      )}
    </div>
  );
}

export default JobsAlerts;

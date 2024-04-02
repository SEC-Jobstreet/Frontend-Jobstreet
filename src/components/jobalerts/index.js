import { useState } from "react";

import DesktopNav from "./components/DesktopNav";
import JobAlert from "./components/JobAlert";
import MobileNav from "./components/MobileNav";
import UnComfirmAlert from "./components/UnComfirmAlert";

import "./index.css";

const JobAlertData = [
  {
    id: "v1",
    title: "  Tuyển dụng, làm việc Java tại Hồ Chí Minh",
  },
  {
    id: "v2",
    title: "  Tuyển dụng, làm việc Fullstack tại Hồ Chí Minh",
  },
];
function JobsAlerts() {
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const uncomfirmHandler = (value) => {
    setIsConfirmEmail(value);
  };
  return (
    <div className="my-account-page content-container -width-xl grid-container -three-columns">
      {/* desktop */}
      <DesktopNav />
      {/* content */}
      <div className="my-account-content grid-content">
        <h3 className="heading-large account-page-heading">Thông báo việc</h3>
        {/* mobile */}
        <MobileNav />
        {!isConfirmEmail && (
          <UnComfirmAlert uncomfirmHandler={uncomfirmHandler} />
        )}
        {/* alert */}
        {isConfirmEmail && (
          <>
            <div id="email-alerts">
              {JobAlertData.map((item) => (
                <JobAlert key={item.id} title={item.title} />
              ))}
            </div>
            <button type="button" className="create-alert-button -primary">
              Tạo thông báo việc làm ngay
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default JobsAlerts;

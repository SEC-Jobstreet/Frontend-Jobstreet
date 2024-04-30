import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import Profile from "../../components/profile/Profile";
import { applyJob } from "../../services/configAPI";

import "./index.css";

const infoIcon = require("../../assets/svg/light_icon.svg").default;
const applySuccessIcon =
  require("../../assets/svg/apply_success_icon.svg").default;

function ApplyPage() {
  const [searchParams] = useSearchParams();

  const [infoCheckbox, setInfoCheckbox] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

  const jobId = searchParams.get("job_id");
  console.log(jobId);

  const applyTheJob = async () => {
    setLoadingSubmit(true);
    const request = {
      job_id: jobId,
    };
    const response = await applyJob(request);
    console.log(response);
    if (response.status === 200) {
      setIsSuccessSubmit(true);
      window.scrollTo(0, 0);
    }
    setLoadingSubmit(false);
  };

  if (isSuccessSubmit) {
    return (
      <div
        className="row col-lg-7"
        style={{
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          margin: "4rem 0",
        }}
      >
        <img
          style={{ width: "230px" }}
          src={applySuccessIcon}
          alt="apply-success-icon"
        />
        <b style={{ fontSize: "2rem", marginTop: "2rem" }}>
          Hồ sơ ứng tuyển của bạn đã được nộp!
        </b>
        <div
          style={{
            textAlign: "left",
            margin: "2rem 0",
            border: "1px solid #00000038",
            borderRadius: "5px",
            padding: "2rem",
          }}
        >
          <h2 style={{ marginBottom: "2rem" }}>Bước tiếp theo là gì?</h2>
          <ul>
            <li>
              Chúng tôi đang gửi đơn ứng tuyển của bạn cho nhà tuyển dụng.
            </li>
            <li>
              Theo dõi cập nhật các ứng tuyển của bạn trong tab{" "}
              <strong>Đã ứng tuyển</strong> của{" "}
              <strong>Việc làm của tôi</strong> trong ứng dụng JobStreet dành
              cho thiết bị di động.
            </li>
          </ul>
        </div>
        <h2 style={{ textAlign: "left" }}>
          Mọi người cũng đã xem những công việc này
        </h2>
      </div>
    );
  }
  return (
    <div className="col-lg-4" style={{ alignSelf: "center" }}>
      <div
        className="column"
        style={{
          display: "flex",
          backgroundColor: "#def0fc",
          padding: "1rem",
          borderRadius: "5px",
          marginBottom: "2rem",
        }}
      >
        <div className="row">
          <img src={infoIcon} alt="info-icon" />
        </div>
        <div
          className="row"
          style={{
            textAlign: "left",
            marginLeft: ".5rem",
            fontSize: "1.4rem",
            lineHeight: "1.7rem",
          }}
        >
          <b>Bạn đang ứng tuyển cho:</b>
          <span>
            {searchParams.get("name")} - {searchParams.get("address")}
          </span>
        </div>
      </div>
      <Profile />

      <div
        style={{ display: "flex", fontSize: "1.4rem", marginBottom: "2rem" }}
      >
        <Form.Check
          className="checkbox-custom"
          type="checkbox"
          value={infoCheckbox}
          checked={infoCheckbox}
          onChange={() => setInfoCheckbox((prev) => !prev)}
        />
        <span style={{ marginLeft: "1rem" }}>
          Thông báo tôi các vị trí tuyển dụng tương tự
        </span>
      </div>

      <Button
        type="button"
        className="apply-my-profile"
        disabled={loadingSubmit}
        onClick={applyTheJob}
      >
        Ứng tuyển với hồ sơ cá nhân
      </Button>

      <div>
        <p style={{ fontSize: "1rem", lineHeight: "1.6rem" }}>
          Hãy cẩn thận - không cung cấp chi tiết ngân hàng hoặc thẻ tín dụng của
          bạn khi nộp đơn ứng tuyển. Không chuyển bất kỳ khoản tiền nào hoặc
          hoàn thành các cuộc khảo sát trực tuyến đáng ngờ. Nếu bạn thấy điều gì
          đó đáng ngờ, hãy báo cáo mẩu tin tuyển dụng này.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: "1.6rem" }}>
          Bằng cách gửi đơn ứng tuyển, bạn đồng ý với Điều Khoản Sử Dụng và
          Chính Sách Bảo Mật của JobStreet, cũng như việc đơn ứng tuyển của bạn
          được gửi đến Nhà Tuyển Dụng và được xử lý theo Chính Sách Bảo Mật của
          Nhà Tuyển Dụng.
        </p>
      </div>
    </div>
  );
}

export default ApplyPage;

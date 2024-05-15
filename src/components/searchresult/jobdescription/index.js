import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { getProfile } from "../../../services/configAPI";
import { useJobsState } from "../context";
import FacetLinks from "../facetlinks";

import styles from "./jobdescription.module.css";

const days = {
  0: "Thứ hai",
  1: "Thứ ba",
  2: "Thứ tư",
  3: "Thứ năm",
  4: "Thứ sáu",
  5: "Thứ bảy",
  6: "Chủ nhật",
};

const sessions = {
  0: "Sáng",
  1: "Chiều",
  2: "Tối",
};

function JobDescription({ data }) {
  const navigate = useNavigate();
  const { savedJobs, setSaveJobs } = useJobsState();

  const handleSaveButtonClick = (id) => {
    const newValue = !savedJobs[id];
    setSaveJobs((prev) => ({ ...prev, [id]: newValue }));
  };

  let postedTimeByDay;
  let postedTimebyHour;
  let workShift;

  if (data != null) {
    postedTimeByDay = Math.round(
      (new Date().getTime() -
        new Date(parseInt(data.CreatedAt, 10) * 1000).getTime()) /
        (1000 * 3600 * 24)
    );

    postedTimebyHour = Math.round(
      (new Date().getTime() -
        new Date(parseInt(data.CreatedAt, 10) * 1000).getTime()) /
        (1000 * 3600)
    );

    workShift = JSON.parse(data.work_shift);
  }

  const handleQuickApply = async (e, href) => {
    e.preventDefault();

    const response = await getProfile();
    if (response.status === 200) {
      navigate(href);
    } else {
      navigate(`/account/profile/edit?redirect=${encodeURIComponent(href)}`);
    }
  };

  return (
    <Container className={styles.wrapper}>
      {data !== null && (
        <div className={styles.jobDescription}>
          <div className={styles.JDInner}>
            <div className={styles.JDHeader}>
              <h3 className={styles.headingXXLarge}>{data.title}</h3>
              <div
                className="d-flex flex-nowrap"
                style={{ marginBottom: "1.6rem" }}
              >
                <span className={styles.company}>{data.enterprise_name}</span>
                <span className={styles.divider}>–</span>
                <span className={styles.location}>
                  {data.enterprise_address.split(", ").pop()}
                </span>
              </div>
              <div className={`${styles.badge} `}>
                <i className={styles.clockIcon} />
                <span>Toàn thời gian</span>
              </div>
              <div style={{ fontSize: "1.4rem" }}>
                {postedTimebyHour < 24
                  ? `${postedTimebyHour} giờ`
                  : `${postedTimeByDay} ngày`}{" "}
                trước, từ{" "}
                {data.crawl ? data.job_source_name : "JobStreet Vietnam"}
              </div>
              <div className={styles.actionsContainer}>
                {!data.crawl ? (
                  <a
                    target="_blank"
                    className={styles.applyButton}
                    href={`/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address.split(", ").pop()}`}
                    rel="noreferrer"
                    onClick={(e) =>
                      handleQuickApply(
                        e,
                        `/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address.split(", ").pop()}`
                      )
                    }
                  >
                    Nộp đơn nhanh
                  </a>
                ) : (
                  <a
                    target="_blank"
                    className={styles.applyButton}
                    href={data.job_source_url}
                    rel="noreferrer"
                  >
                    Xem thêm hoặc nộp hồ sơ
                  </a>
                )}
                <Button
                  className={styles.saveButton}
                  onClick={() => handleSaveButtonClick(data.id)}
                >
                  {savedJobs[data.id] === true ? "Đã lưu lại" : "Lưu việc"}
                </Button>
                <Link
                  to={`/job-detail?job_id=${data.id}`}
                  className={styles.openNewTab}
                  target="_blank"
                >
                  Mở trang mới
                </Link>
              </div>
              <hr className="m-0" />
            </div>
            <div
              className={styles.descriptionContent}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            {!data.crawl && (
              <div>
                <p>
                  <strong>Tóm tắt yêu cầu công việc:</strong>
                </p>
                <ul>
                  {data.work_whenever ? (
                    <li>Giờ làm việc linh hoạt</li>
                  ) : (
                    <li>
                      Đang tìm các ứng viên có thể làm việc vào các ngày
                      <br />
                      <ul style={{ fontSize: "1.4rem" }}>
                        {Object.keys(days).map(
                          (idx) =>
                            (workShift[0][idx] ||
                              workShift[1][idx] ||
                              workShift[2][idx]) && (
                              <li>{`${days[idx]}: ${workShift[0][idx] ? `${sessions[0]}` : ""}${workShift[1][idx] ? `, ${sessions[1]}` : ""}${workShift[2][idx] ? `, ${sessions[2]}` : ""}`}</li>
                            )
                        )}
                      </ul>
                    </li>
                  )}
                  <li>
                    {data.experience === 1 &&
                      "Không yêu cầu kinh nghiệm làm việc cho vị trí này"}
                    {data.experience === 2 &&
                      "Yêu cầu 1 năm kinh nghiệm làm việc có liên quan cho vị trí này"}
                    {data.experience === 3 &&
                      "Yêu cầu 2-3 năm kinh nghiệm làm việc có liên quan cho vị trí này"}
                    {data.experience === 4 &&
                      "Yêu cầu 4 năm kinh nghiệm làm việc trở lên có liên quan cho vị trí này"}
                  </li>
                  <li>
                    {data.visa
                      ? "Visa làm việc có thể được cung cấp cho vị trí này"
                      : "Cần visa làm việc cho vị trí này"}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      <FacetLinks />
    </Container>
  );
}

export default JobDescription;

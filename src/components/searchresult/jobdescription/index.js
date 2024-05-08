import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useJobsState } from "../context";
import FacetLinks from "../facetlinks";

import styles from "./jobdescription.module.css";

function JobDescription({ data }) {
  const { savedJobs, setSaveJobs } = useJobsState();

  const handleSaveButtonClick = (id) => {
    const newValue = !savedJobs[id];
    setSaveJobs((prev) => ({ ...prev, [id]: newValue }));
  };

  let postedTimeByDay;
  let postedTimebyHour;

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
  }

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
                  to="/job-detail"
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
          </div>
        </div>
      )}
      <FacetLinks />
    </Container>
  );
}

export default JobDescription;

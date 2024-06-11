import React from "react";
import { Button, Card } from "react-bootstrap";

import { saveJob, unsaveJob } from "../../../services/api";
import { useJobsState } from "../context";

import styles from "./jobItem.module.css";

function JobItem({ data, activeItem, handleClick }) {
  const { savedJobs, setSaveJobs } = useJobsState();
  const savedJob = savedJobs.includes(data.id);

  console.log(savedJobs);

  const handleSaveButtonClick = async (id) => {
    const isSaved = savedJobs.includes(id);
    if (isSaved) {
      const respone = await unsaveJob({ id });
      if (respone) {
        console.log(respone);
      }
      setSaveJobs((prev) => prev.filter((item) => item !== id));
    } else {
      const respone = await saveJob({ id });
      if (respone) {
        console.log(respone);
      }
      setSaveJobs((prev) => [...prev, id]);
    }
  };

  const handleItemClick = (href, id) => {
    if (window.innerWidth < 1000) {
      window.open(href);
    } else {
      handleClick(id);
    }
  };

  const postedTimeByDay = Math.round(
    (new Date().getTime() -
      new Date(parseInt(data.CreatedAt, 10) * 1000).getTime()) /
      (1000 * 3600 * 24)
  );

  const postedTimebyHour = Math.round(
    (new Date().getTime() -
      new Date(parseInt(data.CreatedAt, 10) * 1000).getTime()) /
      (1000 * 3600)
  );

  return (
    <Card
      className={
        activeItem === data.id
          ? `${styles.wrapper} ${styles.activeJob}`
          : `${styles.wrapper}`
      }
      onClick={() => handleItemClick("/#", data.id)}
    >
      <Card.Body className={styles.jobCard}>
        <Card.Subtitle className="mb-2 text-mute d-flex align-items-center">
          <span className={`${styles.badge} ${styles.seenJobBadge}`}>
            <span>Mới với bạn</span>
          </span>
          <span className={styles.freshnessTime}>Mới với bạn</span>
          {/* <span className="text-end w-50">{data.id}</span> */}
        </Card.Subtitle>
        <Card.Title className={styles.jobTitle}>{data.title}</Card.Title>
        <div className={styles.jobCardBody}>
          <div>{data.enterprise_name}</div>
          <div>{data.enterprise_address.split(", ").pop()}</div>
          {!data.crawl && (
            <div>
              <span className={`${styles.badge} ${styles.quickApplyBadge}`}>
                Nộp đơn nhanh
              </span>
            </div>
          )}
          <div className={`${styles.jobDescriptionOverview}`}>
            {data.description.replace(/<[^>]*>/g, "")}
          </div>
        </div>
        <div className={styles.cardBottom}>
          <span className={styles.listedDate}>
            Đã đăng{" "}
            {postedTimebyHour < 24
              ? `${postedTimebyHour} giờ`
              : `${postedTimeByDay} ngày`}{" "}
            trước
          </span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSaveButtonClick(data.id);
            }}
            className={
              savedJob
                ? `${styles.saveButton} ${styles.savedStyle}`
                : `${styles.saveButton}`
            }
          >
            {savedJob ? "Đã lưu lại" : "Lưu lại"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobItem;

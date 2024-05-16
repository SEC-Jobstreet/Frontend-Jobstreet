import { useEffect, useRef, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchForm from "../../components/searchheader/searchform";
import { getJob } from "../../services/api";
import { getProfile } from "../../services/configAPI";

import "./index.css";
import "../../components/profile/workshift/checkbox.css";
import stylesBar from "./bottombar.module.css";
import styles from "./jobdescription.module.css";

const emailIcon = require("../../assets/svg/email_icon.svg").default;

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

function JobDetail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // State get value to toggle dialog
  const [saveJob, setSaveJob] = useState(false);
  const [showNofJob, setShowNofJob] = useState(false);
  const [show, setShow] = useState(false);

  const [nofEmail, setNofEmail] = useState(true); // State toggle notification Email after commit email
  const [email, setEmail] = useState(""); // State get value email

  const jobId = searchParams.get("job_id");
  const [data, setData] = useState([]);

  const [postedTime, setPostedTime] = useState("");
  const [workShift, setWorkShift] = useState("");

  const emailInputRef = useRef();

  // Handle dialog first hidden
  const handleClose = () => {
    window.open("https://jobsgo.vn/");
    setShow(false);
  };

  // Submit email job.. code in here
  const handleSubmit = (e) => {
    if (nofEmail) {
      const valueEmail = document.getElementById("idsend-mail").value;
      setNofEmail(false);
      setEmail(valueEmail);
      e.preventDefault();
    } else {
      setNofEmail(true);
    }
  };

  // Handle dialog second appear
  const handleViewOtherJobs = () => {
    window.open("https://jobsgo.vn/");
    setShowNofJob(!showNofJob);
    setShow(!show);
  };

  useEffect(() => {
    const getJobDetail = async (id) => {
      const response = await getJob({ id });
      if (response.status === 200) {
        console.log(response);
        setData(response.data.job);
      }
    };

    getJobDetail(jobId);

    // handle savejob
    setSaveJob(false);
  }, []);

  useEffect(() => {
    // handle time display
    if (data.length !== 0) {
      let timeText = "";

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

      if (postedTimebyHour < 24) {
        timeText += `${postedTimebyHour} giờ trước, từ `;
      } else {
        timeText += `${postedTimeByDay} ngày trước, từ `;
      }
      if (data.crawl) {
        timeText += data.job_source_name;
      } else {
        timeText += "JobStreet Vietnam";
      }
      setPostedTime(timeText);

      console.log(timeText);

      setWorkShift(JSON.parse(data.work_shift));
    }
  }, [data]);

  // handle quick apply button click
  const handleQuickApply = async (e, href) => {
    e.preventDefault();

    const response = await getProfile();
    if (response.status === 200) {
      navigate(href);
    } else {
      navigate(`/account/profile/edit?redirect=${encodeURIComponent(href)}`);
    }
  };

  const handleSaveJob = () => {
    setSaveJob((prev) => !prev);
  };

  const scrollToEmailInput = () => {
    emailInputRef.current.scrollIntoView();
    emailInputRef.current.focus();
  };

  return (
    <>
      <Helmet>
        <title>
          {data !== null
            ? `${data.title} | JobStreet`
            : "Tìm kiếm việc làm | JobStreet"}
        </title>
      </Helmet>
      <div className={`seachForm ${styles.mobileHidden}`}>
        <div className="formWrapper">
          <SearchForm />
        </div>
      </div>
      <div className="jobDetailCont">
        <Container className={styles.wrapper}>
          {data !== null && (
            <div className={styles.jobDescription}>
              <div className={styles.JDHeader}>
                <h3 className={styles.headingXXLarge}>{data.title}</h3>
                <div
                  className="d-flex flex-nowrap"
                  style={{ marginBottom: "1.6rem" }}
                >
                  <span className={styles.company}>{data.enterprise_name}</span>
                  <span className={styles.divider}>–</span>
                  <span className={styles.location}>
                    {data.enterprise_address?.split(", ").pop()}
                  </span>
                </div>
                <div className={`${styles.badge} `}>
                  <i className={styles.clockIcon} />
                  <span>Toàn thời gian</span>
                </div>
                <div style={{ fontSize: "1.4rem", paddingBottom: "2.4rem" }}>
                  {postedTime}
                </div>
                <div
                  className={`${styles.actionsContainer} ${styles.mobileHidden}`}
                  style={{ paddingBottom: "2.4rem" }}
                >
                  {!data.crawl ? (
                    <a
                      target="_blank"
                      className={styles.applyButton}
                      href={`/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address?.split(", ").pop()}`}
                      rel="noreferrer"
                      onClick={(e) =>
                        handleQuickApply(
                          e,
                          `/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address?.split(", ").pop()}`
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
                    onClick={() => setSaveJob((prev) => !prev)}
                  >
                    {saveJob === true ? "Đã lưu lại" : "Lưu việc"}
                  </Button>
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
                          {workShift &&
                            Object.keys(days).map(
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
              <div
                className={styles.actionsContainer}
                style={{ marginTop: "20px", marginBottom: "1.6rem" }}
              >
                {!data.crawl ? (
                  <a
                    target="_blank"
                    className={styles.applyButton}
                    href={`/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address?.split(", ").pop()}`}
                    rel="noreferrer"
                    onClick={(e) =>
                      handleQuickApply(
                        e,
                        `/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address?.split(", ").pop()}`
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
                  className={`${styles.saveButton} ${styles.mobileHidden}`}
                  onClick={handleSaveJob}
                >
                  {saveJob === true ? "Đã lưu lại" : "Lưu việc"}
                </Button>
              </div>
              <p className="note-jobDetail">
                Hãy cẩn thận - Đừng cung cấp tài khoản ngân hàng hoặc số thẻ tín
                dụng của bạn khi ứng tuyển. Đừng chuyển tiền để ứng tuyển hay
                làm các khảo sát trực tuyến đáng ngờ. Nếu bạn thấy khả nghi, xin
                vui lòng <a href="/#">thông báo việc này với chúng tôi.</a>
              </p>
              <hr className={styles.mobileHidden} />
            </div>
          )}
        </Container>
        {/* Contain send Email to find job */}
        <div className="jobDetailContRight">
          <div className="contContact">
            <div className="title-jobDetail">
              <span>
                <img
                  src={emailIcon}
                  alt="logo-jobstreet"
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              {nofEmail ? (
                <p>Gửi email cho chính bạn hoặc bạn bè</p>
              ) : (
                <p>Email đã được gửi</p>
              )}
            </div>
            {nofEmail ? (
              <form className="form-jobdetail" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="idsend-mail"
                  id="idsend-mail"
                  placeholder="Nhập email của bạn"
                  className="inpEmail"
                  required
                  ref={emailInputRef}
                />
                <label htmlFor="checkboxMail" className="checkbox-custom">
                  <input
                    type="checkbox"
                    id="checkboxMail"
                    name="checkboxMail"
                  />
                  <span style={{ alignContent: "center", marginLeft: "10px" }}>
                    Gửi thư báo việc hàng ngày cho các việc tương tự
                  </span>
                </label>
                <button type="submit" className="btnSubmit">
                  Gửi email việc
                </button>
              </form>
            ) : (
              <form className="form-jobdetail" onSubmit={handleSubmit}>
                <p>
                  Chúng tôi đã gửi việc tới hòm thư <b>{email}</b>.
                </p>
                <button type="submit" className="btnSubmit">
                  Gửi tiếp thư khác
                </button>
              </form>
            )}
          </div>
        </div>
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <div className="linkCancel">
            <button type="button" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="contDialogJobDetail">
            <p className="titleDialogJobDetail">Ứng tuyển</p>
            <p className="txtDialogJobDetail">
              Bạn có muốn nhận thư báo giới thiệu những công việc tương tự?
            </p>
            <div className="groupButtonDialogJobDetail">
              <button
                type="button"
                id="btnDialogContinue"
                onClick={handleViewOtherJobs}
              >
                Tiếp tục
              </button>
              <a href="/#" className="linkCancelRecommend">
                Không, tôi ổn
              </a>
            </div>
            <p className="txtEndDialogJobDetail">
              Bằng cách tạo thông báo qua email, bạn đồng ý với
              <a className="linkJobDetail" href="/#">
                {" "}
                Các điều khoản và điều kiện sử dụng{" "}
              </a>
              và{" "}
              <a className="linkJobDetail" href="/#">
                {" "}
                Chính Sách Bảo Mật
              </a>{" "}
              của JobStreet Bạn có thể huỷ thông báo qua email bất cứ lúc nào.
            </p>
          </div>
        </Modal>
        <Modal
          show={showNofJob}
          onHide={() => setShowNofJob(!showNofJob)}
          animation={false}
          centered
        >
          <div className="linkCancel">
            <button type="button" onClick={() => setShowNofJob(!showNofJob)}>
              &times;
            </button>
          </div>
          <div className="contDialogJobDetail">
            <img
              src={emailIcon}
              alt="logo-jobstreet"
              style={{ width: "25px", height: "25px" }}
            />
            <b> Thông báo việc làm đã được tạo</b>
            <p className="txtDialogJobDetail" style={{ marginBottom: "30px" }}>
              Bạn sẽ nhận được việc mới cho{" "}
              <span style={{ fontStyle: "italic" }}>
                &quot;Tuyển dụng, tìm việc làm nhân viên kinh doanh ô tô tại Hải
                Dương&quot;
              </span>{" "}
              tại <b>tuando24101997@gmail.com.</b>
            </p>
          </div>
        </Modal>
        <div className={stylesBar.wrapper}>
          <div className={stylesBar.inner}>
            <div className={stylesBar.applyBtn}>
              {!data.crawl ? (
                <a
                  target="_blank"
                  className={styles.applyButton}
                  href={`/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address?.split(", ").pop()}`}
                  rel="noreferrer"
                  onClick={(e) =>
                    handleQuickApply(
                      e,
                      `/apply?job_id=${data.id}&name=${data.title}&address=${data.enterprise_address?.split(", ").pop()}`
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
            </div>
            <div>
              <Button
                className={`${stylesBar.emailBtn} ${stylesBar.iconBtn}`}
                onClick={scrollToEmailInput}
              />
            </div>
            <div>
              <Button
                className={`${stylesBar.saveBtn} ${stylesBar.iconBtn} ${saveJob ? stylesBar.saved : ""}`}
                onClick={handleSaveJob}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetail;

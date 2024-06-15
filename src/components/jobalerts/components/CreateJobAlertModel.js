import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "aws-amplify/auth";

import Info from "../../../assets/svg/circle_info_icon.svg";
import Dismiss from "../../../assets/svg/dismiss_icon.svg";
import Email from "../../../assets/svg/email_icon.svg";
import Location from "../../../assets/svg/location_icon.svg";
import Search from "../../../assets/svg/search_icon.svg";
import { createAlert } from "../../../services/api";
import { selectUser } from "../../../store/user";
import Model from "../model/Model";

import "../index.css";

export default function CreateJobAlertModel(props) {
  const user = useSelector(selectUser);
  const { onHideModelHandler } = props;
  const [inputKeyWords, setInputKeyWords] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getCurrentUser();
    const data = {
      keyword: inputKeyWords,
      city: inputLocation,
      radius: 10,
      userName: res.username,
      email: user?.email,
    };
    const res1 = await createAlert(data);
    console.log(res1);
    onHideModelHandler();
  };
  return (
    <Model onHideModelHandler={onHideModelHandler}>
      <div
        className="content-container -width-md -margin-y-md"
        id="email-alert-management-page"
        style={{ width: "95%", overflowY: "auto", margin: "0px" }}
      >
        <h2 className="heading-large">
          <img src={Email} alt="email-icon" style={{ marginRight: "0.8rem" }} />
          Khám phá những việc làm mới cho tìm kiếm này
        </h2>
        <p>
          Luôn cập nhật với những vị trí tuyển dụng mới phù hợp với những tìm
          kiếm hiện tại của bạn.
        </p>
        <Form
          className="new_email_alert"
          id="email_alert_form"
          method="post"
          style={{ marginBottom: "0px" }}
          onSubmit={handleSubmit}
        >
          {/* từ khoá */}
          <Form.Group
            className="email-alert-container"
            style={{ maxWidth: "40rem" }}
          >
            <Form.Label
              htmlFor="email-alert-query"
              style={{ color: "#626262" }}
            >
              Từ khoá
            </Form.Label>
            <InputGroup className="email-alert">
              <Form.Control
                className="email-alert"
                placeholder="Tên việc, công ty, từ khóa"
                type="text"
                id="email-alert-query"
                value={inputKeyWords}
                onChange={(event) => setInputKeyWords(event.target.value)}
              />
              <InputGroup.Text id="dismiss">
                {inputKeyWords !== "" && (
                  <img
                    src={Dismiss}
                    alt="dismiss icon"
                    onClick={() => setInputKeyWords("")}
                    aria-hidden="true"
                  />
                )}
              </InputGroup.Text>
              <InputGroup.Text>
                <img src={Search} alt="search icon" />
              </InputGroup.Text>
            </InputGroup>
            <div className="field-description">
              <img
                src={Info}
                alt="info-icon"
                style={{
                  margin: "0px 0px 0px 5px",
                  width: "20px",
                  height: "20px",
                }}
              />
              <p
                style={{ color: "#0e8136", fontSize: "1.4rem", margin: "0px" }}
              >
                Vui lòng điền chức danh công việc một cách cụ thể nhất.
              </p>
            </div>
          </Form.Group>
          {/* địa điểm */}
          <Form.Group
            className="email-alert-container"
            style={{ maxWidth: "40rem" }}
          >
            <Form.Label
              htmlFor="email-alert-location"
              style={{ color: "#626262" }}
            >
              Địa điểm
            </Form.Label>
            <InputGroup className="email-alert">
              <Form.Control
                className="email-alert"
                placeholder="Thành phố, quận, huyện"
                type="text"
                id="email-alert-location"
                value={inputLocation}
                onChange={(event) => setInputLocation(event.target.value)}
              />
              <InputGroup.Text id="dismiss">
                {inputLocation !== "" && (
                  <img
                    src={Dismiss}
                    alt="location icon"
                    onClick={() => setInputLocation("")}
                    aria-hidden="true"
                  />
                )}
              </InputGroup.Text>
              <InputGroup.Text>
                <img src={Location} alt="location icon" />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Button type="submit" className="email-alert primary model-wrapper">
            Thông báo việc tương tự
          </Button>
          <div
            className="privacy-statement heading-xxsmall"
            style={{ marginBottom: "1.2rem" }}
          >
            <span className="branded-links">
              Bằng cách tạo thông báo qua email, bạn đồng ý với{" "}
              <NavLink to="/">Các điều khoản và điều kiện sử dụng</NavLink> và{" "}
              <NavLink to="/">Chính Sách Bảo Mật</NavLink> của JobStreet Bạn có
              thể huỷ thông báo qua email bất cứ lúc nào.
            </span>
          </div>
        </Form>
      </div>
    </Model>
  );
}

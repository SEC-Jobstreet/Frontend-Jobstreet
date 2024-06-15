import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser } from "aws-amplify/auth";

import Email from "../../../assets/svg/email_icon.svg";
import { createAlert } from "../../../services/api";
import { selectUser } from "../../../store/user";

import "./styles.css";

const RadiosData = [
  {
    id: "v1",
    value: "Tại địa điểm này",
  },
  {
    id: "v2",
    value: "Bán kính 5km",
  },
  {
    id: "v3",
    value: "Bán kính 10km",
  },
  {
    id: "v4",
    value: "Bán kính 25km",
  },
  {
    id: "v5",
    value: "Bán kính 50km",
  },
  {
    id: "v6",
    value: "Bán kính 100km",
  },
];
const JobtypeData = [
  {
    id: "v1",
    value: "Toàn thời gian",
  },
  {
    id: "v2",
    value: "Bán thời gian",
  },
];

export default function CreateJobAlert() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await getCurrentUser();
    const data = {
      keyword,
      city,
      radius: 10,
      userName: res.username,
      email: user?.email,
    };
    const res1 = await createAlert(data);
    console.log(res1);
    navigate("/account/job-alerts");
  };
  const onCancelHandler = () => {
    navigate("/account/job-alerts");
  };

  const handleKeywordChange = (e) => {
    e.preventDefault(); // prevent the default action
    setKeyword(e.target.value); // set name to e.target.value (event)
  };

  const handleCityChange = (e) => {
    e.preventDefault(); // prevent the default action
    setCity(e.target.value); // set name to e.target.value (event)
  };

  return (
    <>
      <Helmet>
        <title>Tạo thông báo việc làm | JobStreet</title>
      </Helmet>
      <div
        className="content-container -width-md -margin-y-md"
        id="email-alert-management-page"
      >
        <h2 className="heading-large">
          <img src={Email} alt="email-icon" style={{ marginRight: "0.8rem" }} />
          Tạo thông báo việc làm
        </h2>
        <Form className="new_email_alert" id="email_alert_form" method="post">
          {/* từ khoá */}
          <Form.Group className="email-alert-container">
            <Form.Label htmlFor="email-alert-query">Từ khoá:</Form.Label>
            <Form.Control
              className="email-alert"
              placeholder="Tên việc, công ty, từ khóa"
              type="text"
              value={keyword}
              onChange={handleKeywordChange}
              id="email-alert-query"
            />
          </Form.Group>
          {/* địa điểm */}
          <Form.Group className="email-alert-container">
            <Form.Label htmlFor="email-alert-location">Địa điểm:</Form.Label>
            <Form.Control
              className="email-alert"
              placeholder="Thành phố, quận, huyện"
              type="text"
              value={city}
              onChange={handleCityChange}
              id="email-alert-location"
            />
          </Form.Group>
          {/* bán kính */}
          <div className="email-alert-container">
            <Form.Label htmlFor="email-alert-radius">Bán kính:</Form.Label>
            <Form.Select
              aria-label="email-alert-radius"
              className="email-alert"
            >
              {RadiosData.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </Form.Select>
          </div>
          {/* loại việc làm */}
          <div className="email-alert-container">
            <Form.Label htmlFor="email-alert-job-type">Thời gian:</Form.Label>
            <Form.Select
              aria-label="email-alert-job-type"
              className="email-alert"
            >
              {JobtypeData.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </Form.Select>
          </div>

          <Button
            type="submit"
            className="email-alert primary"
            onClick={onSubmitHandler}
            style={{ backgroundColor: "#0e8136" }}
          >
            Tạo thông báo việc
          </Button>
          <Button
            type="button"
            className="email-alert secondary"
            onClick={onCancelHandler}
          >
            Huỷ
          </Button>
          <div className="privacy-statement heading-xxsmall">
            <span className="branded-links">
              Bằng cách tạo thông báo qua email, bạn đồng ý với{" "}
              <NavLink to="/">Các điều khoản và điều kiện sử dụng</NavLink> và{" "}
              <NavLink to="/">Chính Sách Bảo Mật</NavLink> của JobStreet Bạn có
              thể huỷ thông báo qua email bất cứ lúc nào.
            </span>
          </div>
        </Form>
      </div>
    </>
  );
}

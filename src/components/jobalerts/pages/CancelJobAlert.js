import { useState } from "react";
import { Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import Email from "../../../assets/svg/email_icon.svg";
import ReasonItem from "../components/ReasonItem";

import "./styles.css";

const ReasonData = [
  {
    id: "v1",
    title: "Tôi tìm được việc ở nơi khác",
    expand: false,
  },
  {
    id: "v2",
    title: "Tôi đã tìm được việc làm!",
    expand: true,
  },
  {
    id: "v3",
    title: "Không tìm công việc như thế này nữa",
    expand: false,
  },
  {
    id: "v4",
    title: "Việc làm tôi nhận không chính xác",
    expand: false,
  },
  {
    id: "v5",
    title: "Việc làm tôi nhận được không gần nơi tôi tìm",
    expand: false,
  },
  {
    id: "v6",
    title: "Quá nhiều email",
    expand: false,
  },
  {
    id: "v7",
    title: "Lý do khác",
    expand: false,
  },
];
export default function CancelJobAlert() {
  const navigate = useNavigate();
  const [currentSelected, setCurrentSelected] = useState("");

  const onCheckedHandler = (value) => {
    setCurrentSelected(value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/cancel-reason");
  };

  return (
    <>
      <Helmet>
        <title>Cảm ơn góp ý của bạn | JobStreet</title>
      </Helmet>
      <div
        className="cancel-email-page content-container -width-md -margin-y-md"
        id="email-alert-management-page"
      >
        <h2 className="heading-large">
          <img src={Email} alt="email-icon" style={{ marginRight: "0.8rem" }} />
          Thông báo việc làm của bạn đã được huỷ.
        </h2>
        <p>
          Bạn sẽ không nhận email cho thông báo việc làm này nữa. Nếu bạn có
          những thông báo khác chúng sẽ không bị ảnh hưởng.
        </p>
        <div className="frequency_message" id="switch_to_weekly_container">
          <h3 className="heading-medium">Nhiều email quá?</h3>
          <button type="button" className="email-alert primary">
            Chuyển sang thư báo việc hàng tuần
          </button>
        </div>
        <hr className="-with-margin" />
        <div className="cancel-form-container">
          <h2 className="heading-large">
            Tại sao bạn huỷ thông báo việc làm này?
          </h2>
          <p>Hãy giúp chúng tôi hoàn thiện thông báo việc làm.</p>
          <Form
            className="new-cancel-reason"
            id="new-cancel-reason"
            onSubmit={onSubmitHandler}
          >
            <ul className="reason-list">
              {ReasonData.map((item) => (
                <ReasonItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  expand={item.expand}
                  currentSelected={currentSelected}
                  onCheckedHandler={onCheckedHandler}
                />
              ))}
            </ul>
            <button type="submit" className="email-alert primary">
              Gửi đi
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

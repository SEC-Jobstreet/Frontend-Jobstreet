import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "aws-amplify/auth";

import { getAlert } from "../../services/api";

import JobAlert from "./components/JobAlert";
import JobAlertEmpty from "./components/JobAlertEmpty";

import "./index.css";

function JobsAlerts() {
  const [jobData, setJobData] = useState([]);
  const navigate = useNavigate();

  const onChangeJobAlertHandler = (id, identifier) => {
    if (identifier === "discard") {
      setJobData((preState) => preState.filter((item) => item.id !== id));
    }
    if (identifier === "status") {
      setJobData((preState) => {
        const currentArray = [...preState];
        const currentIndex = preState.findIndex((item) => item.id === id);
        const currentItem = preState[currentIndex];
        const updatedItem = { ...currentItem, status: !currentItem.status };
        currentArray[currentIndex] = updatedItem;
        return currentArray;
      });
    }
    if (identifier === "discard") {
      navigate(`${id}/cancel`);
    }
  };

  useEffect(() => {
    const getAlerts = async () => {
      const res = await getCurrentUser();
      const response = await getAlert(res);
      if (response.status === 200) {
        let temp = [];
        for (let i = 0; i < response.data.alertList.length; i += 1) {
          const alert = {
            id: response.data.alertList[i].id,
            status: response.data.alertList[i].on,
            title: response.data.alertList[i].keyword[0],
            city: response.data.alertList[i].city,
          };
          temp = [...temp, alert];
        }
        setJobData(temp);
      }
      console.log(response);
    };
    getAlerts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Thông báo việc làm | JobStreet</title>
      </Helmet>
      <div className="my-account-content grid-content">
        {/* show when email is unconfirm */}

        {jobData.length === 0 && <JobAlertEmpty />}
        {jobData.length !== 0 && (
          <div id="email-alerts">
            {jobData.map((item) => (
              <JobAlert
                key={item.id}
                id={item.id}
                title={item.title}
                city={item.city}
                status={item.status}
                onChangeJobAlertHandler={onChangeJobAlertHandler}
              />
            ))}
          </div>
        )}
        <button
          type="button"
          className="create-alert-button -primary"
          onClick={() => navigate("new")}
        >
          Tạo thông báo việc làm ngay
        </button>
      </div>
    </>
  );
}

export default JobsAlerts;

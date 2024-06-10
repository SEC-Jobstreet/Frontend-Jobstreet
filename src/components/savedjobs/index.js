import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { getSavedJob } from "../../services/api";
import { StateProvider } from "../searchresult/context";
import JobItem from "../searchresult/jobitem";

import "./index.css";

function SavedJobs() {
  const [jobs, setJobs] = useState([]);
  const check = jobs === null || jobs.length === 0; // check API my list job null

  useEffect(() => {
    const loadSavedJobs = async () => {
      // logged in
      const respone = await getSavedJob();
      if (respone.status === 200) {
        console.log(respone);
        if (respone.data.jobs === null) {
          setJobs([]);
        } else {
          setJobs(respone.data.jobs);
        }
      }
    };
    loadSavedJobs();
  }, []);

  return (
    <StateProvider>
      <Helmet>
        <title>Việc đã lưu | JobStreet</title>
      </Helmet>
      <div className="contJobCard">
        {check ? (
          <div>
            <p className="titleTwo">Bạn chưa lưu việc làm nào</p>
            <p className="txtTitle">
              Lưu công việc bạn thích bằng cách sử dụng nút Lưu trên trang kết
              quả tìm kiếm hoặc chi tiết công việc.
            </p>
          </div>
        ) : (
          <div>
            {jobs.map((job) => (
              <div key={job.id}>
                <JobItem
                  data={job}
                  activeItem=""
                  handleClick={(id) => {
                    console.log(id);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </StateProvider>
  );
}

export default SavedJobs;

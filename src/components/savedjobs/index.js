import { Helmet } from "react-helmet-async";

import JobCard from "./job";

import "./index.css";

function SavedJobs() {
  const check = true; // check API my list job null
  return (
    <>
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
            <JobCard />
            <JobCard />
          </div>
        )}
      </div>
    </>
  );
}

export default SavedJobs;

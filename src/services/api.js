import axios from "axios";

export const getJobList = async (data) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/jobs?keyword=${data.keyword}&address=${data.location}&page_id=${data.pageId}&page_size=${data.pageSize}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getJob = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/job/${data.id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
  return null;
};

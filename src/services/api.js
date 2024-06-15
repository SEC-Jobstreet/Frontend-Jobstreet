import axios from "axios";

import axiosConfig from "./axiosConfig";

export const getJobList = (data) => {
  try {
    return axios.get(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/jobs?keyword=${data.keyword}&address=${data.location}&page_id=${data.pageId}&page_size=${data.pageSize}`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getJob = (data) => {
  try {
    return axios.get(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/job/${data.id}`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getJobNumber = () => {
  try {
    return axios.get(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/number_of_job`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getNewJobNumber = ({ keyword, address }) => {
  try {
    return axios.get(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/number_of_new_job?keyword=${keyword}&address=${address}`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSavedJob = () => {
  try {
    return axiosConfig.get(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/saved_job_list`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const saveJob = ({ id }) => {
  try {
    return axiosConfig.post(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/save_job`,
      { job_id: id }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const unsaveJob = ({ id }) => {
  try {
    return axiosConfig.post(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/unsave_job`,
      { job_id: id }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createAlert = async (data) => {
  try {
    const res = await axios.post("http://35.198.229.191:4002/api/v1/alert", {
      keyword: [data.keyword],
      city: data.city === "" ? "Tất cả" : data.city,
      on: true,
      radius: data.radius,
      userName: data.userName,
      email: data.email,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAlert = async (data) => {
  try {
    const res = await axios.get(
      `http://35.198.229.191:4002/api/v1/alert/${data.username}`
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const cancelAlert = async (data) => {
  try {
    const res = await axios.delete(`http://35.198.229.191:4002/api/v1/alert`, {
      data,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

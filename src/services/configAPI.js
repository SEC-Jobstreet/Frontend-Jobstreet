import axiosConfig from "./axiosConfig";

export const getProfile = async () => {
  try {
    const res = await axiosConfig.get(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/profile`
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateProfile = async (data) => {
  try {
    const res = await axiosConfig.put(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/update_profile`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createProfile = async (data) => {
  try {
    const res = await axiosConfig.post(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/create_profile`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const applyJob = async (data) => {
  // data: {job_id: ""}
  try {
    const res = await axiosConfig.post(
      `${process.env.REACT_APP_CANDIDATE_SERVICE}/api/v1/apply_job`,
      data
    );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

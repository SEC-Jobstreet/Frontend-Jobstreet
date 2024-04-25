import axiosConfig from "./axiosConfig";

export const postApplyJob = async () => {
  try {
    const res = await axiosConfig.post(
      "http://localhost:4000/api/v1/apply_job",
      {
        candidate_id: 1,
        job_id: 12,
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getBBB = async () => {
  try {
    await axiosConfig.get("/test/apply_job");
  } catch (error) {
    console.log(error);
  }
};

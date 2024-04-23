import candidateConfig from "./candidateConfig";

export const getAAA = async () => {
  try {
    const res = await candidateConfig.get("/test/apply_job");
    return res;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getBBB = async () => {
  try {
    await candidateConfig.get("/test/apply_job");
  } catch (error) {
    console.log(error);
  }
};

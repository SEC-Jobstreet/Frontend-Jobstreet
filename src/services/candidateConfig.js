import axios from "axios";

const candidateConfig = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_BACKEND_CANDIDATE_SERVICE_ADDRESS,
});

// Also add/ configure interceptors && all the other cool stuff

candidateConfig.interceptors.request.use(
  (request) => {
    const accesstoken = localStorage.getItem("access_token");
    const req = request;
    if (accesstoken) {
      req.headers = {
        ...request.headers,
        authorization: `bearer ${accesstoken}`,
      };
    }

    return req;
  },
  (error) => Promise.reject(error)
);

candidateConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status, data } = error.response;
    if (status === 401 && data?.error === "token has expired") {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) {
        return Promise.reject(error);
      }
      const originalRequest = error.config;

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_CANDIDATE_SERVICE_ADDRESS}/oauth/refresh_token`,
          {
            refresh_token: refreshToken,
          },
          {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        );

        const accessToken = res?.data?.access_token;
        if (accessToken) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          localStorage.setItem("access_token", accessToken);
          return axios(originalRequest);
        }
      } catch (err) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.setItem("token_expired", true);
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default candidateConfig;

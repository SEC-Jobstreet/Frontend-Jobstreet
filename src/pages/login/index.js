import { Helmet } from "react-helmet";

import CandidateLogin from "../../components/login/candidate-login";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Đăng nhập vào JobStreet | JobStreet</title>
      </Helmet>
      <CandidateLogin isPage />
    </>
  );
}

export default LoginPage;

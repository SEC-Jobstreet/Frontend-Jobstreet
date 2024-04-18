import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

import MyAccount from "../../components/myaccount/myaccount";

function Account() {
  return (
    <>
      <Helmet>
        <title>Tạo hồ sơ | JobStreet</title>
      </Helmet>
      <MyAccount>
        <Outlet />
      </MyAccount>
    </>
  );
}

export default Account;

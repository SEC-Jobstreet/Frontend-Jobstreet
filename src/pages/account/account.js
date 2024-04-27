import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";

import MyAccount from "../../components/myaccount/myaccount";
import SearchForm from "../../components/searchheader/searchform";

import "./account.css";

function Account() {
  const location = useLocation();
  const isShowSearchForm = location.pathname.includes("/profile");
  return (
    <>
      {!isShowSearchForm && (
        <div className="search-hearder">
          <div className="search-hearder-container">
            <div className="search-form -desktop-only">
              <SearchForm />
            </div>
          </div>
        </div>
      )}
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

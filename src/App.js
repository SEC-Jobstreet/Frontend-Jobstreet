import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import Footer from "./components/footer";
import NotificationBar from "./components/notificationbar";
import { setNotification } from "./store/notification";
import { loginAccount, logoutAccount } from "./store/user";
import { notiAccountExpired } from "./utils/notification";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [rehydrated, setReHyddated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = () => {
      const idToken =
        Cookies.get("id_token") || localStorage.getItem("id_token");
      const accessToken =
        Cookies.get("access_token") || localStorage.getItem("access_token");
      const refreshToken =
        Cookies.get("refresh_token") || localStorage.getItem("refresh_token");

      if (idToken && accessToken && refreshToken) {
        localStorage.setItem("id_token", idToken);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        Cookies.remove("id_token");
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");

        try {
          const data = jwtDecode(idToken);
          dispatch(loginAccount(data));
        } catch (err) {
          localStorage.removeItem("id_token");
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          dispatch(logoutAccount());
        }
      }
    };
    if (localStorage.getItem("token_expired")) {
      dispatch(setNotification(notiAccountExpired));
      localStorage.removeItem("token_expired");
    } else checkToken();
    setReHyddated(true);
  }, []);

  return (
    rehydrated && (
      <div className="App">
        <Helmet>
          <title>
            Tìm việc tại trang tìm kiếm việc làm số 1 Việt Nam | JobStreet
          </title>
          <meta
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
            name="viewport"
          />
        </Helmet>
        <NavBar />
        <div className="app-content">
          <NotificationBar />
          <AppRouter />
        </div>
        <Footer />
      </div>
    )
  );
}

export default App;

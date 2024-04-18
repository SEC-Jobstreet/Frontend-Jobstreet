import { useEffect, useState } from "react";
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
      const IDToken = Cookies.get("IDToken");
      if (IDToken) {
        const exp = new Date(jwtDecode(IDToken).exp);
        if (new Date() > new Date(exp * 1000)) {
          dispatch(setNotification(notiAccountExpired));
          Cookies.remove("IDToken");
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          dispatch(logoutAccount());
        }
        const data = jwtDecode(IDToken);
        dispatch(loginAccount(data));
      }
    };
    checkToken();
    setReHyddated(true);
  }, []);

  return (
    rehydrated && (
      <div className="App">
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

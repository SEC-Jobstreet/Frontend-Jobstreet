import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { decodeJWT, getCurrentUser } from "aws-amplify/auth";

import NavBar from "./components/appnav";
import AppRouter from "./components/approuter";
import Footer from "./components/footer";
import NotificationBar from "./components/notificationbar";
import { postApplyJob } from "./services/candidateAPI";
import { loginAccount } from "./store/user";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [rehydrated, setReHyddated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await getCurrentUser();
        console.log(res);
        let userinfo = {
          username: res.username,
        };
        try {
          console.log(
            `CognitoIdentityServiceProvider.${process.env.REACT_APP_COGNITO_USER_POOL_CLIENT_ID}.${res.username}.idToken`
          );
          const idToken = localStorage.getItem(
            `CognitoIdentityServiceProvider.${process.env.REACT_APP_COGNITO_USER_POOL_CLIENT_ID}.${res.username}.idToken`
          );
          console.log(idToken);

          const data = decodeJWT(idToken);
          userinfo = {
            ...userinfo,
            email: data.payload.email,
          };
          console.log(data);
        } catch (err) {
          console.log(err);
        }
        dispatch(loginAccount(userinfo));
      } catch (err) {
        console.log(err);
      }
    };

    checkToken();
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
        <button
          type="button"
          onClick={async () => {
            await postApplyJob();
          }}
        >
          aaaaaaaaaaaaa
        </button>
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

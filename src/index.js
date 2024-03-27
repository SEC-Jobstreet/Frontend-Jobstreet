import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Announcement from "./components/draftComponent/Announcement";
import ForgotPassword from "./components/draftComponent/ForgotPassword";
import MyJobs from "./components/draftComponent/MyJobs";
import Profile from "./components/draftComponent/Profile";
import App from "./App";
// import store from "./store/store";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/announcement",
    element: <Announcement />,
  },
  {
    path: "/my-jobs",
    element: <MyJobs />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

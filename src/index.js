import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";

import store from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "font-awesome/css/font-awesome.min.css";
import "./index.css";

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: process.env.REACT_APP_COGNITO_USER_POOL_CLIENT_ID,
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
      // OPTIONAL - Set to true to use your identity pool's unauthenticated role when user is not logged in
      allowGuestAccess: true,
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: "link", // 'code' | 'link'
      loginWith: {
        // OPTIONAL - Hosted UI configuration
        oauth: {
          domain: process.env.REACT_APP_COGNITO_OAUTH_DOMAIN,
          scopes: ["phone", "email", "profile", "openid"],
          redirectSignIn: [process.env.REACT_APP_REDIRECT_SIGN_IN],
          redirectSignOut: [process.env.REACT_APP_REDIRECT_SIGN_OUT],
          responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

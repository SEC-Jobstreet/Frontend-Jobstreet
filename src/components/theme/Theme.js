import React, { useState } from "react";
import { IoMoon, IoPartlySunny, IoToggleSharp } from "react-icons/io5";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import "./Theme.scss";

const lightTheme = {
  textColor: "#fff",
  background: "#000",
};

const darkTheme = {
  textColor: "#000",
  background: "#fff",
};

const Global = createGlobalStyle`
  .theme-container {
    background-color: ${({ theme }) => theme.background};
    transition: all 200ms;
  }
`;

const TextChange = styled.span`
  color: ${({ theme }) => theme.textColor};
`;

export default function Theme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="theme-container">
      <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
        <Global />
        <div className="title-container">
          <TextChange className="theme-title">
            {theme === "light" ? <IoPartlySunny /> : <IoMoon />}
          </TextChange>
        </div>
        <div className="content-container">
          <TextChange
            className={
              theme === "light"
                ? "theme-name selected-theme light"
                : "theme-name light"
            }
          >
            Light
          </TextChange>
          <TextChange
            className={
              theme === "light" ? "toggle-icon  rotate-180deg" : "toggle-icon"
            }
            onClick={toggleTheme}
          >
            <IoToggleSharp />
          </TextChange>
          <TextChange
            className={
              theme === "dark"
                ? "theme-name selected-theme dark"
                : "theme-name dark"
            }
          >
            Dark
          </TextChange>
        </div>
      </ThemeProvider>
    </div>
  );
}

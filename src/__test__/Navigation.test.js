// Navigation.test.js

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Navigation from "../components/navigation/Navigation";

describe("Navigation Component", () => {
  it("renders without crashing", () => {
    render(<Navigation />);
  });

  test("shows error message for incorrect login details", () => {
    render(<Navigation />);
    const loginButton = screen.getByRole("button", {
      name: /đăng nhập/i,
      hidden: true,
    });
    fireEvent.click(loginButton);
  });
});

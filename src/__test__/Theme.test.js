import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Theme from "../components/theme/Theme";

describe("Theme Component", () => {
  it("renders without crashing", () => {
    render(<Theme />);
  });
});

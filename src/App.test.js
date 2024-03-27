import { fireEvent, render } from "@testing-library/react";

import App from "./App";

describe("User authentication", () => {
  test("User can log in", () => {
    const { queryByTestId } = render(<App />);
    let user = {
      username: "user@gmail.com",
      password: "123456",
    };
    const emailInputField = queryByTestId(`email-input`);
    fireEvent.change(emailInputField, { target: { value: user.username } });

    const passwordInputField = queryByTestId(`password-input`);
    fireEvent.change(passwordInputField, { target: { value: user.password } });

    const loginButton = queryByTestId("login");
    fireEvent.click(loginButton);

    expect(queryByTestId(`logout`)).toBeInTheDocument();
  });
});

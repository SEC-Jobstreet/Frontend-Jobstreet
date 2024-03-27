import { fireEvent, render } from "@testing-library/react";

import App from "./App";

describe("User authentication", () => {
  test("User can log in", () => {
    // render app
    const { queryByTestId } = render(<App />);

    // user seeder
    const user = {
      username: "user@gmail.com",
      password: "123456",
    };

    // get email input element
    const emailInputField = queryByTestId(`email-input`);
    // set value into email input
    fireEvent.change(emailInputField, { target: { value: user.username } });

    // get password input element
    const passwordInputField = queryByTestId(`password-input`);
    // set value into password input
    fireEvent.change(passwordInputField, { target: { value: user.password } });

    // get login button element
    const loginButton = queryByTestId("login");
    // fire a click event on login button
    fireEvent.click(loginButton);

    // expect logout button showed
    expect(queryByTestId(`logout`)).toBeInTheDocument();
  });
});

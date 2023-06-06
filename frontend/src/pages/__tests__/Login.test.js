/**
 * @jest-environment jsdom
 */
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

describe("Test login page", () => {
  beforeEach(() => {
    render(<Login />, {
      wrapper: MemoryRouter,
    });
  });

  afterEach(() => cleanup());

  it("Should have Login text on screen", () => {
    const loginText = screen.getAllByText("Login")[0];
    expect(loginText).toBeInTheDocument();
  });

  it("Should handle valid credentials", () => {
    
    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    const error = screen.getByTestId('error')

    act(() => {
      fireEvent.change(usernameInput, { target: { value: "user" } });
      fireEvent.change(passwordInput, { target: { value: "1234" } });
    });

    expect(usernameInput.value).toBe("user");
    expect(passwordInput.value).toBe("1234");

    act(() => {
      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);
    });

    expect(error.textContent).toBe('')

  });

  it("Should handle invalid credentials", () => {
    
    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    const error = screen.getByTestId('error')

    act(() => {
      fireEvent.change(usernameInput, { target: { value: "invalid" } });
      fireEvent.change(passwordInput, { target: { value: "invalid" } });
    });

    expect(usernameInput.value).toBe("invalid");
    expect(passwordInput.value).toBe("invalid");

    act(() => {
      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);
    });

    expect(error.textContent).toBe('invalid username or password')

  });
});

import React from "react";
import { render, act, screen, fireEvent, cleanup, } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router";
import "@testing-library/jest-dom";
import { ShoppingCartProvider } from "../../context/shoppingCartContext";

describe("Test navbar component", () => {
  let navigate;

  beforeEach(() => {
    navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    render(
      <ShoppingCartProvider>
        <Navbar />
      </ShoppingCartProvider>,
      { wrapper: BrowserRouter }
    );
  });

  afterEach(() => cleanup());

  test("Should navigate to profile page", () => {
    const profileLink = screen.getByTestId("profile");
    fireEvent.click(profileLink);
    expect(navigate).toHaveBeenCalledWith("/profile", expect.any(Object));
  });

  test("Should navigate to homepage", () => {
    const profileLink = screen.getByTestId("homepage");
    fireEvent.click(profileLink);
    expect(navigate).toHaveBeenCalledWith("/homepage", expect.any(Object));
  });

  test("Should navigate to contact page", () => {
    const profileLink = screen.getByTestId("contact");
    fireEvent.click(profileLink);
    expect(navigate).toHaveBeenCalledWith("/contact", expect.any(Object));
  });

  test("Should render chatbox component", () => {
    const chatLink = screen.getByTestId("chat");
    fireEvent.click(chatLink);
    expect(screen.getByRole("chatbox")).toBeInTheDocument();
  });
});

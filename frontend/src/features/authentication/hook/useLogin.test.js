/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect"; 
import { cleanup,renderHook, act } from "@testing-library/react";
import useLogin from "./useLogin";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router";


describe("Test useLogin hook", () => {
  let navigate;
  let result;

  beforeEach(() => {
    //create spy function on useNavigate to tracks a calls made to it
    navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    
    result = renderHook(() => useLogin(), {
      wrapper: MemoryRouter,
    }).result;
  });

  afterEach(() => {
    cleanup()
  });

  test("should handle login with valid user account", () => {
    const usernameRef = { current: { value: "user" } };
    const passwordRef = { current: { value: "1234" } };

    //Enter a valid username and password
    act(() => {
      result.current.username.current = usernameRef.current;
      result.current.password.current = passwordRef.current;
    });

    //submit
    act(() => {
      const mockEvent = { preventDefault: jest.fn() };
      result.current.handleLogin(mockEvent);
    });

    //assertion
    expect(result.current.error).toBe("");
    expect(navigate).toHaveBeenCalledWith("/homepage");
  });

  test("should handle login with valid seller account", () => {
    const usernameRef = { current: { value: "admin" } };
    const passwordRef = { current: { value: "1234" } };

    //Enter a valid username and password
    act(() => {
      result.current.username.current = usernameRef.current;
      result.current.password.current = passwordRef.current;
    });

    //submit
    act(() => {
      const mockEvent = { preventDefault: jest.fn() };
      result.current.handleLogin(mockEvent);
    });

    //assertion
    expect(result.current.error).toBe("");
    expect(navigate).toHaveBeenCalledWith("/admin");
  });

  test("should handle login with valid admin account", () => {
    const usernameRef = { current: { value: "admin" } };
    const passwordRef = { current: { value: "1234" } };

    //Enter a valid username and password
    act(() => {
      result.current.username.current = usernameRef.current;
      result.current.password.current = passwordRef.current;
    });

    //submit
    act(() => {
      const mockEvent = { preventDefault: jest.fn() };
      result.current.handleLogin(mockEvent);
    });

    //assertion
    expect(result.current.error).toBe("");
    expect(navigate).toHaveBeenCalledWith("/admin");
  });

  test("should handle login with invalid credentials", () => {
    const usernameRef = { current: { value: "invalid" } };
    const passwordRef = { current: { value: "invalid" } };

    //Enter invalid username and password
    act(() => {
      result.current.username.current = usernameRef.current;
      result.current.password.current = passwordRef.current;
    });

    //submit
    act(() => {
      const mockEvent = { preventDefault: jest.fn() };
      result.current.handleLogin(mockEvent);
    });

    expect(result.current.error).toBe("invalid username or password");
  });
});

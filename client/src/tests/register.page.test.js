import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../pages/Register";
import { BrowserRouter } from "react-router-dom";

describe("Register page component", () => {
  test("Login form should be present on the screen by default", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const form = screen.getByText("Login");
    expect(form).toBeInTheDocument();
  });
  test("Only Email and Password fields should be present on the screen", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.queryByRole("name")).not.toBeInTheDocument();
  });
  test("Clicking Register should toggle the register form", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const button = screen.getByText("Register");
    fireEvent.click(button);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Landing from "../pages/Landing";
import { BrowserRouter } from "react-router-dom";

test("Login/Register button should be present on the screen", async () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
  const loginButton = screen.getByText(/Login/i);
  expect(loginButton).toBeInTheDocument();
});

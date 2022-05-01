import { render, screen } from "@testing-library/react";
import Error from "../pages/Error";
import { BrowserRouter } from "react-router-dom";

test("Page not found text should be present on the screen", async () => {
  render(
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
  const loginButton = screen.getByText(/Ohh! Page not found/i);
  expect(loginButton).toBeInTheDocument();
});

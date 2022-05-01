import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders a title text for the dashboard", () => {
  render(<App />);
  const titleElement = screen.getByText(/Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});

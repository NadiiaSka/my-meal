import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders dashboard title text", () => {
  render(<App />);
  const titleElement = screen.getByText(/Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});

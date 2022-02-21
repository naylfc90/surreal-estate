import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders view properties link", () => {
  render(<App />);
  const linkElement = screen.getByText(/view properties/i);
  expect(linkElement).toBeInTheDocument();
});

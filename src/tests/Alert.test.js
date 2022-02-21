import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

test("error message is displayed", () => {
  const { getByText } = render(<Alert message="Error" />);

  expect(getByText(/Error/).textContent).toBe("Error");
});

test("success message is displayed", () => {
  const { getByText } = render(<Alert message="Success" />);

  expect(getByText(/Success/).textContent).toBe("Success");
});

test("does not render success/error message if props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});

test("error message is rendered if props is set to 'error'", () => {
  const { asFragment } = render(<Alert message="Error" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});

test("success message is rendered if props is set to 'success'", () => {
  const { asFragment } = render(<Alert message="Success" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});

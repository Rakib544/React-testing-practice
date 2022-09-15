import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/My first testing practice/i);
  expect(linkElement).toBeInTheDocument();
});

// Test
// test(name, fn, timeout)
// The first argument is the name used to identify the test
// The second argument is a function that contains the exception to the test
// The third argument is timeout which is an optional argument for specifying how long to wait before the aborting the test. This default timeout value is 5 seconds.

/**
 * Greet should render the text hello and if a name is passed onto the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/);
  expect(textElement).toBeInTheDocument();
});

test("Greet should render name", () => {
  render(<Greet name="Rakib" />);
  const textElement = screen.getByText("Hello, Rakib");
  expect(textElement).toBeInTheDocument();
});

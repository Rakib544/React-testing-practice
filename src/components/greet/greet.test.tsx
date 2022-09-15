import { render, screen } from "@testing-library/react";
import Greet from "./greet";
test("Greet renders correctly", () => {
  render(<Greet />);
  const exceptionText = screen.getByText(/Hello world!/);
  expect(exceptionText).toBeInTheDocument();
});

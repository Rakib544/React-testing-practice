import { render, screen } from "@testing-library/react";
import From from "./form";

describe("From", () => {
  test("renders correctly", () => {
    render(<From />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageSubHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageSubHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are required");
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("fullName");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Rakib");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});

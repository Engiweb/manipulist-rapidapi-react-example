import { render, screen } from "@testing-library/react";
import AppForm from "./AppForm";

describe("AppForm", () => {
  test("check text", () => {
    render(<AppForm />);
    const span = screen.getByTestId("footer");
    expect(span).toHaveTextContent("Made by Engiweb Ltd");
  });

  test("check link", () => {
    render(<AppForm />);
    const span = screen.getByTestId("ew-lnk");
    expect(span).toHaveAttribute("href");
  });
});

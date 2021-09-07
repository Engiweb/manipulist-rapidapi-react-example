import { render, screen } from "@testing-library/react";
import AppFooter from "./AppFooter";

describe("AppFooter", () => {
  test("check text", () => {
    render(<AppFooter />);
    const span = screen.getByTestId("footer");
    expect(span).toHaveTextContent("Made by Engiweb Ltd");
  });

  test("check link", () => {
    render(<AppFooter />);
    const span = screen.getByTestId("ew-lnk");
    expect(span).toHaveAttribute("href");
  });
});

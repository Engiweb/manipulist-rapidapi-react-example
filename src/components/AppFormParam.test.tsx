import { render, screen } from "@testing-library/react";
import AppFormParam from "./AppFormParam";

describe("AppFormParam", () => {
  test("check text", () => {
    render(<AppFormParam />);
    const span = screen.getByTestId("footer");
    expect(span).toHaveTextContent("Made by Engiweb Ltd");
  });

  test("check link", () => {
    render(<AppFormParam />);
    const span = screen.getByTestId("ew-lnk");
    expect(span).toHaveAttribute("href");
  });
});

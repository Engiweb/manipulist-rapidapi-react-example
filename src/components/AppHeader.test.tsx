import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  test("check header", () => {
    render(<AppHeader />);
    const span = screen.getByTestId("header");
    expect(span).toHaveTextContent("MANIPULIST RapidAPI example");
  });
});

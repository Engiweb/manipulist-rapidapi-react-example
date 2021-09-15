import { render } from "@testing-library/react";
import AppForm from "./AppForm";

describe("AppForm", () => {
  afterEach(() => jest.resetAllMocks());

  test("should match snapshot", () => {
    const { asFragment } = render(<AppForm />, {});
    expect(asFragment).toMatchSnapshot();
  });
});

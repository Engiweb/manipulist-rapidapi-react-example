import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  afterEach(() => jest.resetAllMocks());

  test("should match snapshot", () => {
    const { asFragment } = render(<App />, {});
    expect(asFragment).toMatchSnapshot();
  });
});

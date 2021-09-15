import { render, screen } from "@testing-library/react";
import { TOOLS_FORM } from "../constants/form";
import AppFormParam from "./AppFormParam";

const register = jest.fn();

describe("AppFormParam", () => {
  afterEach(() => jest.resetAllMocks());

  test("should work when add-incremental-number and param1", () => {
    const { asFragment } = render(
      <AppFormParam
        register={register}
        tool={TOOLS_FORM["add-incremental-number"]}
        errors={{}}
        name="param1"
      />
    );

    expect(asFragment).toMatchSnapshot();
  });

  test("should work when add-incremental-number and param2", () => {
    const { asFragment } = render(
      <AppFormParam
        register={register}
        tool={TOOLS_FORM["add-incremental-number"]}
        errors={{}}
        name="param2"
      />
    );

    expect(asFragment).toMatchSnapshot();
  });
});

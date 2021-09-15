import sendToManipulistApi from "./sendToManipulistApi";
import * as callManipulistApi from "manipulist-rapidapi-query";

jest.mock("manipulist-rapidapi-query");

describe("sendToManipulistApi", () => {
  afterEach(() => jest.resetAllMocks());

  test("should return error when param1 missing", async () => {
    const response = {
      message: "param1 is required",
    };

    jest
      .spyOn(callManipulistApi, "default")
      .mockReturnValue(Promise.resolve(response));

    const setLoading = jest.fn();
    const setOutput = jest.fn();
    const data = {
      textImport: "Text",
      input: "some\nstring",
      tool: "add-incremental-number",
      param1: "wrong", // should be integer
      param2: "atStart",
      lb: "lf",
    };

    await sendToManipulistApi({
      setLoading,
      setOutput,
      data,
    });

    expect(setLoading.mock.calls).toEqual([[true], [false]]);
    expect(setOutput).toHaveBeenCalledWith("param1 is required");
  });

  test("should return response", async () => {
    const response = {
      data: "1some\n2string\n",
    };

    jest
      .spyOn(callManipulistApi, "default")
      .mockReturnValue(Promise.resolve(response));

    const setLoading = jest.fn();
    const setOutput = jest.fn();
    const data = {
      textImport: "Text",
      input: "some\nstring",
      tool: "add-incremental-number",
      param1: 1,
      param2: "atStart",
      lb: "lf",
    };

    await sendToManipulistApi({
      setLoading,
      setOutput,
      data,
    });

    expect(setLoading.mock.calls).toEqual([[true], [false]]);
    expect(setOutput).toHaveBeenCalledWith(response.data);
  });
});

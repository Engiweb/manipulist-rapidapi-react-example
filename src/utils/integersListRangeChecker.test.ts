/* eslint no-console:0 */
import integersListRangeChecker from "./integersListRangeChecker";

describe("integersListRangeChecker", () => {
  it("should return false when empty", () => {
    const value = "";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return false when containing not valid char", () => {
    const value = "1,2,a-bc";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return false when containing not valid char - 2", () => {
    const value = "1,2,1a";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return false when , and - subsequent", () => {
    const value = "1,2,-3";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return false when ,, subsequent", () => {
    const value = "1,2,,3";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return false when -- subsequent", () => {
    const value = "1,2,,3";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return false when list is not in sequence", () => {
    const value = "1,3,2-4,3";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(false);
  });

  it("should return valid when list", () => {
    const value = "1,2,3,4";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(true);
  });

  it("should return valid when range", () => {
    const value = "1-2";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(true);
  });

  it("should return valid when list and range", () => {
    const value = "1-2,5-8";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(true);
  });

  it("should return valid when integer", () => {
    const value = "12";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(true);
  });

  it("should return valid when zero", () => {
    const value = "0";

    const output = integersListRangeChecker(value);

    expect(output).toEqual(true);
  });
});
